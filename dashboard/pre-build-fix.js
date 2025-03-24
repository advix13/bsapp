
// This is a pre-build step to create empty files
const fs = require('fs');
const path = require('path');

console.log('Creating route group directories for static export...');

// Create empty placeholder files for the route groups
const routeGroupPath = path.join(__dirname, 'src/app/(dashboard)');
fs.mkdirSync(path.join(routeGroupPath, '_static'), { recursive: true });
fs.writeFileSync(path.join(routeGroupPath, '_static/placeholder.js'), 'export default {};');

// Additional exports compatibility fixes
const appDir = path.join(__dirname, 'src/app');
fs.mkdirSync(path.join(appDir, '_static'), { recursive: true });
fs.writeFileSync(path.join(appDir, '_static/placeholder.js'), 'export default {};');

console.log('Pre-build fixes applied successfully!');
