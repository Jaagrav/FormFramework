// This file is a helper script for building the package
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Ensure dist directory exists
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'));
}

// Run rollup build command
console.log('Building the dntel-form package...');
exec('npx rollup -c', { cwd: __dirname }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error during build: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log('Build completed successfully!');
  
  // Copy README and package.json to dist folder for publishing
  fs.copyFileSync(
    path.join(__dirname, 'README.md'),
    path.join(__dirname, 'dist', 'README.md')
  );
  
  const pkg = require('./package.json');
  // Remove scripts and devDependencies for the published package.json
  delete pkg.scripts;
  delete pkg.devDependencies;
  
  fs.writeFileSync(
    path.join(__dirname, 'dist', 'package.json'),
    JSON.stringify(pkg, null, 2)
  );
  
  console.log('Package files prepared for publishing!');
});