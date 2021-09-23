import Timer from "./Timer";
import {memo} from 'react'
import { Typography } from "@material-ui/core";

const TasksList = ({elements}) => {
    return (<div>
        {elements.map(e => (
        <div key={e.id}>
            <Timer initTimeout={e.time} />
            <Typography>{e.description}</Typography>
        </div>
        ))}
    </div>);

};

export default memo(TasksList);