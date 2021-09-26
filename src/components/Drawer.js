import React from 'react'

import Canvas from "./Canvas";
import useDrawing from "..//hooks/useDrawing";
import { draw, sleep } from '../utils/Utils';

export default function Drawer() {
    const [handleMouseDown, handleMouseUp, handleMouseMove, drawnPoints] = useDrawing()

    const handleReplay = async (listOfPoints, canvas, ctx) => {
        for(let element of listOfPoints){
            let start = element.start
            let end = element.end
            draw(ctx, start, end)
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
