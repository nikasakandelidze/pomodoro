import { Route, BrowserRouter as Router, Switch  } from "react-router-dom";
import Scheduler from "./components/Scheduler";
import { useState } from "react";

import Drawer from "./components/Drawer";
import SideMenu from "./components/sideMenu/SideMenu";
import CustomButton from "./components/UI/Button";

import './App.css'

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const toggleSideMenu = () => setIsSideMenuOpen(prevState=>!prevState);

  return (
    <div className='App'>
       <Router>
       <div style={{display: 'flex'}}>
        <CustomButton title={'Menu'} onClickCallback={toggleSideMenu} />
          <div className={'side-menu'}>
            <SideMenu isOpen={isSideMenuOpen} onClose={toggleSideMenu} toggleDrawer={toggleSideMenu}/>
          </div>
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
