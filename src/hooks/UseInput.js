import { useState } from "react/cjs/react.development";


const useInput = () => {
    const [input, setInput] = useState(null)

    const handleInputChange = (e) => {
        setInput(e.target.value)
    };

    return {input, handleInputChange}
};

export default useInput;