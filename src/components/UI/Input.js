import {TextField} from '@material-ui/core';
import '../../styles/CustomInput.css'

const CustomInput = ({onChange, ...rest}) =>{
    return (
        <div className={'input-text-field-container'}>
            <TextField color={'primary'} onChange={e=>onChange(e)} variant='filled' {...rest}/>
        </div>
    );
};

export default CustomInput;