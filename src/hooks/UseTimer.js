import { useEffect, useState } from 'react';

const DELAY = 1000;

const useTimer = ({ timeout }) => {
    const [time, setTime] = useState(null)

    useEffect(() => {
        setTime(timeout)
    }, [timeout])

    useEffect(() => {
        if (time != null && time > 0) {
            setTimeout(() => {
                setTime(time => time - 1);
            }, DELAY);
        } else {
            time != null && alert('done');
        }
    }, [time, timeout])

    return { time }

}

export default useTimer;
