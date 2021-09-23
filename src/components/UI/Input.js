import {TextField} from '@material-ui/core';


const CustomInput = ({onChange}) =>{
    return (
        <div>
            <TextField color={'primary'} onChange={e=>onChange(e)} variant='filled'/>
        </div>
    );
};

export default CustomInput;