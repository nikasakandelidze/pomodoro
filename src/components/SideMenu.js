import React from 'react'
import { Drawer } from '@material-ui/core'
import { Link } from 'react-router-dom'

import '../styles/SideMenu.css'

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
                        canvas
                    </Link>
                    </li>
                    <li className={'nav-menu-item'}>
                    <Link to='/'>
                        Home
                    </Link>
                    </li>
                </ul>
            </Drawer>
        </div>
    )
}
