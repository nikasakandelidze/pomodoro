import { Card, Typography } from "@material-ui/core";
import { useState } from "react/cjs/react.development";
import Timer from "./Timer";

import '../../styles/Task.css'

const cardStyle = {
    display: 'block',
    width: '10vw',
    height: '10vw',
    marginTop: '30px',
    padding: '10px',
    borderRadius:'10px'
}

const Task = ({time, description}) => {
    const [done, setDone] = useState(false)

    const colorPair = done ? {backgroundColor:'#630A10', color: 'white'} : {backgroundColor:'#FFE194'}

    const style = {...cardStyle, ...colorPair}

    return (
        <div  className={'task-container'}>
            <Card variant={'elevation'} style={style}>
                <Timer initTimeout={time} setDone={(value)=>setDone(value)}/>
                <h4>Description: </h4> <Typography>{description}</Typography>
            </Card>
        </div>
    );

};


export default Task;