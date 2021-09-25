import { useRef, useEffect} from 'react'
import useSize from '../hooks/useSize';

export default function Canvas({ w, h, draw }) {
    const canvasRef = useRef(null);
    const {ww, hh} = useSize()
    const canvasWidth = (w * ww / window.screen.width) || w
    const canvasHeight = (h * hh  / window.screen.height) || h

    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')
        draw(canvas, context)
    })

    return ( 
        <div>
            <div>
                <canvas style={{outline:'1px solid'}} ref={canvasRef} width={canvasWidth} height={canvasHeight}>
                </canvas>
            </div>
        </div>
    )
}