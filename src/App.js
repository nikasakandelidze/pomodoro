import { Link,Route, BrowserRouter as Router, Switch  } from "react-router-dom";
import Scheduler from "./components/Scheduler";

import './App.css'
import Canvas from "./components/Canvas";
import useDrawing from "./hooks/useDrawing";

function App() {
  const [handleMouseDown, handleMouseUp, handleMouseMove, drawnPoints] = useDrawing()

  return (
    <div className='App'>
       <Router>
          <ul>
            <li>
              <Link to='/canvas'>
                canvas
              </Link>
            </li>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
          </ul>
          <Switch>
          <Route path='/canvas'>
              <Canvas w={800} h={500} draw = {(canvas, ctx) => {
                        canvas.addEventListener('mousedown', (e) => handleMouseDown(e, ctx));
                        canvas.addEventListener('mouseup', () => handleMouseUp());
                        canvas.addEventListener('mousemove', (e) => handleMouseMove(e, ctx));
                
              }}/>
            </Route>
            <Route path='/'>
              <Scheduler/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
