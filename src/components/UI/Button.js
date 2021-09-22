import {Button} from '@material-ui/core';

function CustomButton({title, onClickCallback}){
    return (<div className={'classic-button'}>
        <Button color={'primary'} variant={'contained'} onClick={e=>onClickCallback()}>
            {title}
        </Button>
    </div>);
}

export default CustomButton;