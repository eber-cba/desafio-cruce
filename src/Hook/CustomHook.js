import React from 'react'

export function CustomHook(initialState) {
    const [value, setValue] = React.useState(initialState);

    const onChange = (e) => {
      setValue(e.target.value);
    };
  
    return { value, onChange }
}
