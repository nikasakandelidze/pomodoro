import { Link,Route, BrowserRouter as Router, Switch  } from "react-router-dom";
import Scheduler from "./components/Scheduler";
import { useState } from "react";

import Drawer from "./components/Drawer";
import SideMenu from "./components/SideMenu";

import './App.css'
import CustomButton from "./components/UI/Button";


function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const toggleSideMenu = () => setIsSideMenuOpen(prevState=>!prevState);

  return (
    <div className='App'>
       <Router>
        <CustomButton title={'Menu'} onClickCallback={toggleSideMenu} />
        <div className={'side-menu'}>
          <SideMenu isOpen={isSideMenuOpen} onClose={toggleSideMenu} toggleDrawer={toggleSideMenu}/>
        </div>
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
