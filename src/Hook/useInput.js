import { useState } from "react";

export  function useInput() {
    const [value, setValue] = useState("");
    const onChange = (e) => setValue(e.target.value);
    return { value, onChange };
}
