// This is a pre/post-build step to create empty files for route group compatibility
// And handle other build/deployment compatibility issues

const fs = require('fs');
const path = require('path');

// Detect if we're on Vercel or local
const env = process.env.VERCEL ? 'Vercel' : 'Local';
console.log(`Environment: ${env}`);

// Base paths to check
const basePath = process.cwd();
console.log(`Base path: ${basePath}`);

// Next.js directory
const nextDir = path.join(basePath, '.next');
console.log(`Base Next.js directory: ${nextDir}`);

// Target directories where we may need to create empty manifest files
const targetDirs = [
  path.join(nextDir, 'server/app/(dashboard)'),
  path.join(nextDir, 'server/app/(dashboard)'),
  path.join(nextDir, 'standalone/.next/server/app/(dashboard)'),
];

// Additional directories to check on Vercel
if (process.env.VERCEL) {
  targetDirs.push(
    path.join('/vercel/output/.next/server/app/(dashboard)'),
    path.join('/vercel/output/.next/standalone/.next/server/app/(dashboard)')
  );
}

// Create empty manifest files in all potential locations
for (const dir of targetDirs) {
  try {
    console.log(`Checking path: ${dir}`);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      console.log(`Created directory: ${dir}`);
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Create empty manifest file if it doesn't exist
    const manifestFile = path.join(dir, 'page_client-reference-manifest.js');
    if (!fs.existsSync(manifestFile)) {
      fs.writeFileSync(manifestFile, '// Auto-generated empty manifest file');
      console.log(`Created empty manifest file at ${manifestFile}`);
    } else {
      console.log(`Manifest file already exists at ${manifestFile}`);
    }
  } catch (error) {
    console.log(`Error processing ${dir}: ${error.message}`);
  }
}

// Create empty route files for Next.js app router
try {
  const routeGroupPaths = [
    path.join(basePath, 'src/app/(dashboard)/_static'),
    path.join(basePath, 'src/app/_static')
  ];
  
  for (const dir of routeGroupPaths) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created route group directory: ${dir}`);
    }
    
    const placeholderFile = path.join(dir, 'placeholder.js');
    fs.writeFileSync(placeholderFile, 'export default {};');
    console.log(`Created placeholder file: ${placeholderFile}`);
  }
} catch (error) {
  console.log(`Error creating route group files: ${error.message}`);
} 