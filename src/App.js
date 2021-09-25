import { Link,Route, BrowserRouter as Router, Switch  } from "react-router-dom";
import Scheduler from "./components/Scheduler";

import './App.css'
import Canvas from "./components/Canvas";

function App() {
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
                ctx.fillStyle = 'red'
                ctx.fillRect(100, 100, 200, 200)  
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
