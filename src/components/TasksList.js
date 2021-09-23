import {memo} from 'react'
import Task from './Task';


const TasksList = ({elements}) => {
    return (<div style={{display: 'flex', 'flex-flow': 'wrap'}}>
        {elements.map(e => <Task key={e.id} time={e.time} description = {e.description}/>)}
    </div>);

};

export default memo(TasksList);