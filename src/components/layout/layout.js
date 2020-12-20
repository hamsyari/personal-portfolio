import React, { useState, useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import SidebarComponent from "./sidebar"
import { Menu, Segment, Sidebar } from 'semantic-ui-react'
import { SideBarItem } from './sidebar-item'
import { SideBarHeader } from './sidebar-header'

const Layout = ({ children }) => {
  const [openDrawer, toggleDrawer] = useState(false);
    const drawerRef = useRef(null);

    useEffect(() => {
        const closeDrawer = event => {
          if (drawerRef.current && drawerRef.current.contains(event.target)) {
            return;
          }
    
          toggleDrawer(false);
        };
    
        document.addEventListener("mousedown", closeDrawer);
        return () => document.removeEventListener("mousedown", closeDrawer);
      }, []);

  return (
    <>
      <SidebarComponent/>
      <Sidebar.Pushable as={ Segment } className="pushableWrapper">
        <Sidebar as={ Menu } animation='overlay' icon='labeled' vertical visible={ openDrawer } width='thin' className="sidecolor">
          <SideBarHeader/>
          <SideBarItem highlight={true}  label='Home' icon='home' link='/'/>
          <SideBarItem label='About Me' icon='user outline' link='/about-me'/>
          <SideBarItem label='Resume' icon='id card outline' link='/resume/'/>
          <SideBarItem label='Contact' icon='envelope outline' link='/contact/'/>
        </Sidebar> 
        <Sidebar.Pusher dimmed={ openDrawer } className="pusherWrapper">
            <div className="mobileMenuWrapper">
              <div className="mobileMenuTitleWrapper">
                  <div className="mobileMenuTitle">
                      Hamsyari
                  </div>
              </div>
              <div className="mobileMenuToggleWrapper" onClick={() => toggleDrawer(true)}>
                  <i className="bars icon mobileMenuToggleIcon"></i>
              </div>
          </div>
          <main>{children}</main>
        </Sidebar.Pusher> 
      </Sidebar.Pushable>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
