import { Link } from 'gatsby'
import React from 'react'

export const SideBarItem = (props) => {
    return (
        <Link to={props.link} className="sidebarItemWrapper" activeClassName="sideItemWrapperActive">
          <div className="sidebarItem">
            <div className="sidebarItemIconWrapper">
              <i className={`icon ${props.icon} sidebarItemIcon`}></i>
            </div>
            <span>{props.label}</span>
          </div>
        </Link>
    )
}
