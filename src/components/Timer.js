import useTimer from '../hooks/UseTimer';

function Timer({initTimeout}){
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const { time } = useTimer( {timeout: initTimeout} )

    return (<div>
        Time left: {time}
    </div>);
}

export default Timer;