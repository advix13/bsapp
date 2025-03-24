// This is a pre/post-build step to create empty files for route group compatibility
// And handle other build/deployment compatibility issues

const fs = require('fs');
const path = require('path');

// Error handling wrapper to ensure the script continues even with errors
function safeExecute(fn, errorMessage = 'Error in operation') {
  try {
    return fn();
  } catch (error) {
    console.log(`${errorMessage}: ${error.message}`);
    return null;
  }
}

// Detect if we're on Vercel or local
const isVercel = !!process.env.VERCEL;
console.log(`Environment: ${isVercel ? 'Vercel' : 'Local'}`);

// Base paths to check
const basePath = process.cwd();
console.log(`Base path: ${basePath}`);

// Next.js directory
const nextDir = path.join(basePath, '.next');
console.log(`Base Next.js directory: ${nextDir}`);

// Target directories where we may need to create empty manifest files
const targetDirs = [
  path.join(nextDir, 'server/app/(dashboard)'),
  path.join(nextDir, 'server/app'),
  // Add additional paths that might be needed
  path.join(nextDir, 'server'),
  path.join(nextDir, 'server/pages'),
  path.join(nextDir, 'static/chunks'),
];

// Additional directories to check on Vercel
if (isVercel) {
  // Vercel 2023+ directory structure
  targetDirs.push(
    path.join('/vercel/output/.next/server/app/(dashboard)'),
    path.join('/vercel/output/.next/server/app'),
    path.join('/vercel/output/.next/server'),
    // Newer paths based on Vercel's latest deployment structure
    path.join('/vercel/path0/.next/server/app/(dashboard)'),
    path.join('/vercel/path0/.next/server/app'),
    path.join('/vercel/path0/.next/server'),
    // Additional fallback paths
    path.join('/tmp/.next/server/app'),
    path.join('/tmp/.next/server/app/(dashboard)')
  );
}

// Create empty manifest files in all potential locations
for (const dir of targetDirs) {
  try {
    console.log(`Checking path: ${dir}`);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      safeExecute(() => {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Created directory: ${dir}`);
      }, `Cannot create directory ${dir}`);
    }
    
    // Create empty manifest files for various potential needs
    const manifestFiles = [
      'page_client-reference-manifest.js',
      'app-paths-manifest.json',
      'client-reference-manifest.js'
    ];
    
    for (const manifestFile of manifestFiles) {
      safeExecute(() => {
        const fullPath = path.join(dir, manifestFile);
        if (!fs.existsSync(fullPath)) {
          // Create appropriate content based on file type
          const content = manifestFile.endsWith('.js') 
            ? '// Auto-generated empty manifest file\nexport {};\n' 
            : '{}';
            
          fs.writeFileSync(fullPath, content);
          console.log(`Created empty file at ${fullPath}`);
        } else {
          console.log(`File already exists at ${fullPath}`);
        }
      }, `Cannot create manifest file ${manifestFile} in ${dir}`);
    }
  } catch (error) {
    console.log(`Error processing ${dir}: ${error.message}`);
    // Continue with next directory despite errors
  }
}

// Create empty route files for Next.js app router
safeExecute(() => {
  const routeGroupPaths = [
    path.join(basePath, 'src/app/(dashboard)/_static'),
    path.join(basePath, 'src/app/_static'),
    path.join(basePath, 'src/app/_components'),
    path.join(basePath, 'src/pages')
  ];
  
  for (const dir of routeGroupPaths) {
    safeExecute(() => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Created route group directory: ${dir}`);
      }
      
      const placeholderFile = path.join(dir, 'placeholder.js');
      fs.writeFileSync(placeholderFile, 'export default {};\n');
      console.log(`Created placeholder file: ${placeholderFile}`);
    }, `Cannot process route group directory ${dir}`);
  }
}, 'Error creating route group files');

// Create .env.local if it doesn't exist to ensure env variables
safeExecute(() => {
  const envPath = path.join(basePath, '.env.local');
  if (!fs.existsSync(envPath)) {
    fs.writeFileSync(envPath, '# Auto-generated environment file\nNEXT_PUBLIC_APP_ENV=production\n');
    console.log(`Created .env.local file at ${envPath}`);
  }
}, 'Error creating .env.local file');

console.log('Build fix script completed - any errors were suppressed to allow build to continue'); 