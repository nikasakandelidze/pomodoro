import {Input} from '@material-ui/core';


const CustomInput = ({onChange}) =>{
    return (
        <div>
            <Input color={'primary'} onChange={e=>onChange(e)}/>
        </div>
    );
};

export default CustomInput;