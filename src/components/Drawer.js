import React from 'react'

import Canvas from "./Canvas";
import useDrawing from "..//hooks/useDrawing";
import { sleep } from '../utils/Utils';

export default function Drawer() {
    const [handleMouseDown, handleMouseUp, handleMouseMove, drawnPoints] = useDrawing()

    const handleReplay = async (listOfPoints, canvas, ctx) => {
        for(let element of listOfPoints){
            let start = element.start
            let end = element.end
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.closePath();
            await sleep(10)
        }
    }

    return (
        <div>
               <Canvas
               w={800}
               h={500} 
               draw = {(canvas, ctx) => {
                        canvas.addEventListener('mousedown', (e) => handleMouseDown(e, ctx));
                        canvas.addEventListener('mouseup', () => handleMouseUp());
                        canvas.addEventListener('mousemove', (e) => handleMouseMove(e, ctx));
               }}
               replay = {(canvas, ctx) =>handleReplay(drawnPoints, canvas, ctx)}
               />
        </div>
    )
}
