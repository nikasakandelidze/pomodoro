import { Card, Typography } from "@material-ui/core";
import { useState } from "react/cjs/react.development";
import Timer from "./Timer";


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

    console.log(colorPair)

    const style = {...cardStyle, ...colorPair}

    return (
        <div style={{marginLeft: '20px'}}>
            <Card variant={'elevation'} style={style}>
                <Timer initTimeout={time} setDone={(value)=>setDone(value)}/>
                <h4>Description: </h4> <Typography>{description}</Typography>
            </Card>
        </div>
    );

};


export default Task;