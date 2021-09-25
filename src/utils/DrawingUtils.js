import { useRef } from "react";

const useDrawing = () =>{
    
    const isDrawing = useRef(false);
    let start = { x: 0, y: 0 };
    let end = { x: 0, y: 0 };

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
    
            // Draw our path
            context.beginPath();
            context.moveTo(start.x, start.y);
            context.lineTo(end.x, end.y);
            context.strokeStyle = '#00f';
            context.lineWidth = 3;
            context.stroke();
            context.closePath();
          }
      };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    return [handleMouseDown, handleMouseUp, handleMouseMove]
}

export default useDrawing;