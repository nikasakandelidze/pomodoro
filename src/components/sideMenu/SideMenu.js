import React from 'react'
import { Drawer } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuItem from './MenuItem'

import '../../styles/SideMenu.css'

export default function SideMenu({isOpen, toggleDrawer}) {
    return (
        <div>
            <Drawer
                anchor={'hi'}
                open={isOpen}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
                >
                 <ul className={'nav-menu'}>
                    <li className={'nav-menu-item'}>
                    <Link to='/canvas'>
                        <MenuItem title={'Canvas'} width={'50px'}/>
                    </Link>
                    </li>
                    <li className={'nav-menu-item'}>
                    <Link to='/'>
                        <MenuItem title={'Home'} width={'50px'}/>
                    </Link>
                    </li>
                </ul>
            </Drawer>
        </div>
    )
}
