import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings />
                    </div>

                    <img src="/img/tour7.jpg" alt="" className="topAvartar" />
                </div>

            </div>
        </div>
    )
}

export default Topbar
