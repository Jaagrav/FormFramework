# Publishing Guide for dntel-form

This document outlines the steps to publish the dntel-form library to npm.

## Prerequisites

1. Make sure you have an npm account (create one at https://www.npmjs.com/signup if needed)
2. Log in to npm from your terminal:
   ```
   npm login
   ```

## Preparing for Publication

1. Update the version number in `package.json` if needed
2. Ensure all recent changes are committed to your repository
3. Run tests if available to ensure everything works correctly

## Building the Package

1. Install the required dependencies:
   ```
   npm install --save-dev rollup rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve
   ```

2. Run the build script:
   ```
   node build-entry.js
   ```

   This will:
   - Build the library using Rollup
   - Copy the README.md to the distribution folder
   - Create a distribution-specific package.json

## Publishing to npm

1. Navigate to the `dist` directory:
   ```
   cd dist
   ```

2. Publish the package:
   ```
   npm publish
   ```

   If this is your first time publishing this package, use:
   ```
   npm publish --access=public
   ```

3. Verify the publication by checking the npm registry:
   ```
   npm view dntel-form
   ```

## Updating the Package

To publish an update:

1. Update the version in the root `package.json` file
2. Build the package again: `node build-entry.js`
3. Publish from the dist directory: `cd dist && npm publish`

## Using the Published Package

Once published, users can install the package using:

```
npm install dntel-form
```

And import it in their code:

```javascript
import { useDntelForm } from 'dntel-form';
```