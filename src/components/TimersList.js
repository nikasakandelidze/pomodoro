import Timer from "./Timer";
import {memo} from 'react'

const TimersList = ({elements}) => {
    return (<div>
        {elements.map(e => <Timer key={e.id} initTimeout={e.time}/>)}
    </div>);

};

export default memo(TimersList);