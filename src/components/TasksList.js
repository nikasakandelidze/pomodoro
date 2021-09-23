import Timer from "./Timer";
import {memo} from 'react'
import { Card, Typography } from "@material-ui/core";

const cardStyle = {
    display: 'block',
    width: '10vw',
    height: '10vw',
    marginTop: '30px',
    padding: '10px'
}

const TasksList = ({elements}) => {
    return (<div style={{display: 'flex'}}>
        {elements.map(e => (
        <div key={e.id} style={{marginLeft: '20px'}}>
            <Card variant={'elevation'} style={cardStyle}>
                <Timer initTimeout={e.time} />
                <Typography>{e.description}</Typography>
            </Card>
        </div>
        ))}
    </div>);

};

export default memo(TasksList);