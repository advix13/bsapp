const fs = require('fs');
const path = require('path');

// This script creates empty client-reference-manifest files for route groups
// to prevent the ENOENT error during build

// Define base paths - handle both local and Vercel environments
const isVercel = process.env.VERCEL === '1';
const basePath = isVercel ? '/vercel/path0' : __dirname;
const baseNextDir = path.join(basePath, '.next');

// Paths to check and fix
const pathsToFix = [
  path.join(baseNextDir, 'server/app/(dashboard)'),
  // Add backup path for Vercel environment
  path.join(basePath, '.next/server/app/(dashboard)'),
  // For standalone output
  path.join(baseNextDir, 'standalone/.next/server/app/(dashboard)'),
  // Additional paths for absolute reference
  path.join('/vercel/path0/.next/server/app/(dashboard)'),
  path.join('/vercel/path0/.next/standalone/.next/server/app/(dashboard)')
];

// Ensure directories exist
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    } catch (err) {
      console.error(`Error creating directory ${dir}:`, err.message);
    }
  }
};

// Create the empty client-reference-manifest file
const createEmptyManifestFile = (dir) => {
  const manifestFile = path.join(dir, 'page_client-reference-manifest.js');
  
  try {
    if (!fs.existsSync(manifestFile)) {
      // Create an empty file with valid JS content
      fs.writeFileSync(
        manifestFile,
        'module.exports = { __esModule: true, default: {} };'
      );
      console.log(`Created empty manifest file at ${manifestFile}`);
    } else {
      console.log(`Manifest file already exists at ${manifestFile}`);
    }
  } catch (err) {
    console.error(`Error creating manifest file ${manifestFile}:`, err.message);
  }
};

// List all directories to check file existence
console.log('Environment:', isVercel ? 'Vercel' : 'Local');
console.log('Base path:', basePath);
console.log('Base Next.js directory:', baseNextDir);

// Try to fix all possible paths
pathsToFix.forEach(dirPath => {
  console.log(`Checking path: ${dirPath}`);
  ensureDir(dirPath);
  createEmptyManifestFile(dirPath);
});

// Handle additional Vercel-specific case by creating a symlink if needed
if (isVercel) {
  try {
    const possibleSourcePaths = [
      path.join(basePath, '.next/server/app/(dashboard)/page_client-reference-manifest.js'),
      path.join('/vercel/path0/.next/server/app/(dashboard)/page_client-reference-manifest.js')
    ];

    const possibleTargetPaths = [
      path.join(basePath, '.next/standalone/.next/server/app/(dashboard)/page_client-reference-manifest.js'),
      path.join('/vercel/path0/.next/standalone/.next/server/app/(dashboard)/page_client-reference-manifest.js')
    ];

    // Try to create symlinks between any existing source and missing target
    for (const source of possibleSourcePaths) {
      if (fs.existsSync(source)) {
        for (const target of possibleTargetPaths) {
          if (!fs.existsSync(target)) {
            ensureDir(path.dirname(target));
            fs.symlinkSync(source, target);
            console.log(`Created symlink from ${source} to ${target}`);
          }
        }
      }
    }
  } catch (err) {
    console.error('Error creating symlink:', err.message);
  }
} 