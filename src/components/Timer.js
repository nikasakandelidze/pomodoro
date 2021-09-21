import useTimer from '../hooks/UseTimer';
import Button from './UI/Button'

function Timer(){

    const { startCountdown, input, time } = useTimer( {timeout: 1000} )


    return (<div>
        <div>
            <input ref={input} type='text' name='time' value={time} onChange={e=>{
                input.current = e.target.value;
            }}/>                
        </div>
        <div>
            <Button title={'start timer'} onClickCallback={()=>startCountdown()}/>    
        </div>
    </div>);
}

export default Timer;