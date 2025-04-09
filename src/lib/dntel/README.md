# Dntel Form

A flexible and interactive dynamic form library for React.

## Features

- Support for multiple form field types: text, boolean, select, date
- Custom field rendering with string value fallback support
- Dynamic section layouts
- Form draft persistence with local storage
- Section and field-level customization
- TypeScript support
- Tailwind CSS styling
- Comprehensive form validation

## Installation

```bash
npm install dntel-form
# or
yarn add dntel-form
```

## Usage

```jsx
import React from 'react';
import { useDntelForm } from 'dntel-form';

// Sample form data
const formData = {
  sections: {
    // Your form sections go here
  }
};

const MyForm = () => {
  const { FormComponent, changes, editMode, setEditMode } = useDntelForm(formData, 'my-form-id');

  return (
    <div>
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Save' : 'Edit'}
      </button>
      
      <FormComponent />
      
      <pre>
        {JSON.stringify(changes, null, 2)}
      </pre>
    </div>
  );
};

export default MyForm;
```

## Custom Section Rendering

You can provide custom renderers for specific sections:

```jsx
import { useDntelForm } from 'dntel-form';
import MyCustomSection from './MyCustomSection';

const MyForm = () => {
  const { FormComponent } = useDntelForm(formData);

  return (
    <FormComponent 
      customRenderMap={{
        "MySectionId": MyCustomSection
      }}
    />
  );
};
```

## License

MIT