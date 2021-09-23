import { useEffect, useState } from 'react';

const DELAY = 1000;

const useTimer = ({ timeout }) => {
    const [time, setTime] = useState(null)
    const [done, setDone] = useState(false)

    useEffect(() => {
        setTime(timeout)
    }, [timeout])

    useEffect(() => {
        if (time != null && time > 0) {
            setTimeout(() => {
                setTime(time => time - 1);
            }, DELAY);
        } else {
            time != null && setDone(true);
        }
    }, [time, timeout])

    return { time, done }

}

export default useTimer;
