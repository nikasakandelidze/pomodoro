import { Link,Route, BrowserRouter as Router, Switch  } from "react-router-dom";
import Scheduler from "./components/Scheduler";

import './App.css'
import Drawer from "./components/Drawer";


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
              <Drawer/>
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
