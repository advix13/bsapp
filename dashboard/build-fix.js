const fs = require('fs');
const path = require('path');

// This script creates empty client-reference-manifest files for route groups
// to prevent the ENOENT error during build

// Define paths
const nextDir = path.join(__dirname, '.next');
const serverDir = path.join(nextDir, 'server');
const appDir = path.join(serverDir, 'app');
const dashboardDir = path.join(appDir, '(dashboard)');

// Ensure directories exist
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Create the empty client-reference-manifest file
const createEmptyManifestFile = () => {
  ensureDir(dashboardDir);
  
  const manifestFile = path.join(dashboardDir, 'page_client-reference-manifest.js');
  
  if (!fs.existsSync(manifestFile)) {
    // Create an empty file with valid JS content
    fs.writeFileSync(
      manifestFile,
      'module.exports = { __esModule: true, default: {} };'
    );
    console.log(`Created empty manifest file at ${manifestFile}`);
  }
};

// Run the fix
createEmptyManifestFile(); 