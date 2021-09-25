import { useState } from "react/cjs/react.development";


const useList = ({validateInputItem}) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        let isValidTask = validateInputItem(item);
        if(isValidTask){
            setItems([...items, item])
        }
    };

    return [items, addItem]
};

export default useList;