import { Link,Route, BrowserRouter as Router, Switch  } from "react-router-dom";
import Scheduler from "./components/Scheduler";

import './App.css'
import Drawer from "./components/Drawer";


function App() {
  return (
    <div className='App'>
       <Router>
          <ul className={'nav-menu'}>
            <li className={'nav-menu-item'}>
              <Link to='/canvas'>
                canvas
              </Link>
            </li>
            <li className={'nav-menu-item'}>
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
