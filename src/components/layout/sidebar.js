import React from 'react'
import { Menu } from 'semantic-ui-react'
import { SideBarItem } from './sidebar-item'
import { SideBarHeader } from './sidebar-header'

const Sidebar = () => {
    return (
        <Menu borderless vertical stackable fixed='left' className='sidebarWrapper'>
            <SideBarHeader/>
            <SideBarItem highlight={true}  label='Home' icon='home' link='/'/>
            <SideBarItem label='About Me' icon='user outline' link='/about-me'/>
            <SideBarItem label='Resume' icon='id card outline' link='/resume/'/>
            <SideBarItem label='Contact' icon='envelope outline' link='/contact/'/>
        </Menu>
    )
}

export default Sidebar