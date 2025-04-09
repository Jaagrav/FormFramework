# Development Guide for dntel-form

This document provides guidance on developing and testing the dntel-form library within this repository.

## Project Structure

```
src/lib/dntel/
├── components/           # UI components of the form system
│   ├── DntelForm.tsx     # Main form container component
│   ├── FormField.tsx     # Individual field component
│   ├── FormSection.tsx   # Section container component
│   ├── FormSidebar.tsx   # Sidebar navigation component
│   └── CodesSectionRenderer.tsx # Custom renderer for Codes section
├── hooks/
│   └── useDntelForm.tsx  # Main hook for form state management
├── types.ts              # TypeScript type definitions
├── utils.ts              # Utility functions
├── index.ts              # Library entry point with exports
├── package.json          # Library package configuration
├── tsconfig.json         # TypeScript configuration
└── rollup.config.js      # Build system configuration
```

## Development Workflow

1. **Testing Changes:**
   
   The library is being used directly in the parent application. Changes made to the library files will automatically be reflected in the running app after recompilation.

2. **Adding New Features:**

   - Create new components in the `components/` directory
   - Define new types in `types.ts`
   - Add utility functions in `utils.ts`
   - Export new features through `index.ts`

3. **Performance Considerations:**

   - Use React.memo() for components that don't need frequent re-renders
   - Use useCallback() for event handlers and functions passed as props
   - Use useMemo() for expensive computations

## Integration with UI Libraries

The form components are designed to work with shadcn UI components but can be adapted to work with other UI libraries:

1. Update the imports in component files to use your preferred UI library
2. Make sure to handle the styling appropriately
3. Test the components to ensure they work as expected

## Building Locally for Testing

To build the library locally without publishing:

1. Navigate to the library directory:
   ```
   cd src/lib/dntel
   ```

2. Install dev dependencies:
   ```
   npm install --save-dev rollup rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve
   ```

3. Run the build:
   ```
   node build-entry.js
   ```

4. The compiled files will be available in the `dist/` directory

## Creating Custom Renderers

To create a custom section renderer, follow this pattern:

1. Create a component that takes `FormSectionProps` as its props
2. Implement the component logic including handler functions
3. Register it in the parent component using the `customRenderMap` prop:

```tsx
<FormComponent 
  customRenderMap={{
    "SectionId": YourCustomRenderer
  }}
/>
```