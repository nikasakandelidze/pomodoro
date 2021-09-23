import { useState } from "react/cjs/react.development";


const NUMBER_REGEX = /^\d+$/;


const useInput = ({type}) => {
    const [input, setInput] = useState(null)
    const [message, setMessage] = useState("")

    const handleInputChange = (e) => {
        let value = e.target.value
        if(value && !value.match(NUMBER_REGEX)){
            setMessage(`Input value must be of ${type} type`)
        }else{
            if(message !== ""){
                setMessage("")
            }
            setInput(e.target.value)
        }
    };

    return {input, message, handleInputChange}
};

export default useInput;