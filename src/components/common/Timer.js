import { Typography } from '@material-ui/core';
import { useEffect} from 'react';
import useTimer from '../../hooks/UseTimer';

function Timer({initTimeout, setDone}){
    const { time, done} = useTimer( {timeout: initTimeout} )

    useEffect(()=>{
        if(done){
            setDone(true);
        }
    }, [done, setDone])

    return (<div>
        <h3>Time left: </h3>{time}
        { done && <Typography>Done</Typography>}
    </div>);
}

export default Timer;