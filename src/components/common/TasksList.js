import {memo} from 'react'
import Task from './Task';

import '../../styles/TasksList.css'

const TasksList = ({elements}) => {
    return (<div className={'tasks-list-container'} style={{display: 'flex', flexFlow: 'wrap'}}>
        {elements.map(e => <Task key={e.id} time={e.time} description = {e.description}/>)}
    </div>);

};

export default memo(TasksList);