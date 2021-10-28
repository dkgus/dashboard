//import React from 'react'
import "./sidebar.css"
import {LineStyle} from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dash Board</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            < LineStyle/>
                        </li>
                    </ul>

                </div>    
            </div>
        </div>
    )
}
