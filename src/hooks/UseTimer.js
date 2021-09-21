import { useEffect, useRef, useState } from 'react';


const useTimer = ({timeout}) => {
    const [time, setTime] = useState(null)
    const input = useRef(null)

    useEffect(()=>{
        if(time != null && time > 0){
            setTimeout(()=>{
                setTime(time=>time - 1);
            }, timeout);
        } else{
            time != null && alert('done');
        }
    }, [time, timeout])

    useEffect(()=>{
        input.current.focus()
    }, [])

    const startCountdown = () => setTime(input.current);

    return {startCountdown, input, time}

}

export default useTimer;
