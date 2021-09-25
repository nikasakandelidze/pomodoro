import { useState, useEffect } from 'react/cjs/react.development'


export default function useSize() {
  
    const [windowSize, setWindowSize] = useState({
      ww: undefined,
      hh: undefined
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          ww: window.innerWidth,
          hh: window.innerHeight
        });
      }
  
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
