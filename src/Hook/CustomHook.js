import { useState, useEffect } from "react";

 
export const CustomHook = (name, defaultValues) => {
  const [value, setValue] = useState("");
   
const defaultValue=defaultValues
  const onChange = ({ target: { value } }) => setValue(value);
  useEffect(() => {
    setValue(defaultValues ? defaultValues : '');
  }, [defaultValues]);
  return { defaultValue,value, onChange, name };

};
