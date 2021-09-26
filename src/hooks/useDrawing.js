import { useRef, useState } from "react";
import { draw } from "../utils/Utils";

const useDrawing = () =>{    
    const isDrawing = useRef(false);
    let start = { x: 0, y: 0 };
    let end = { x: 0, y: 0 };
    const drawnPoints = useRef([])
    
    const handleMouseDown = (evt, context) => {
        const ctxRect = context.canvas.getBoundingClientRect()
        start = {
            x: evt.clientX,
            y: evt.clientY,
        };
    
        end = {
            x: evt.clientX - ctxRect.left,
            y: evt.clientY - ctxRect.top,
        };
        isDrawing.current = true;
        drawnPoints.current.push({start:{...end}, end: {...end}})
    };  

    const handleMouseMove = (evt, context) => {
        const ctxRect = context.canvas.getBoundingClientRect()
        if (isDrawing.current && context) {
            start = {
              x: end.x,
              y: end.y,
            };
    
            end = {
              x: evt.clientX - ctxRect.left,
              y: evt.clientY - ctxRect.top,
            };
            draw(context, start, end)
            drawnPoints.current.push({start: {...start},end: {...end}})
          }
      };

    const handleMouseUp = () => {
        isDrawing.current = false;
        drawnPoints.current.push({start:{...start}, end: {...end}})
    };

    return [handleMouseDown, handleMouseUp, handleMouseMove, drawnPoints.current]
}

export default useDrawing;