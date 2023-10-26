import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import './SideBar.css';
import sidebar_profile from '../../../assets/sidebar_profile.png';

function SideBar() {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    return (
        <div className={`sidebar ${sideBarOpen ? "active" : ""}`}>
            <button onClick={toggleSideBar} className="toggle-button">
            <i className="fas fa-arrow-left"></i>
            </button >
            {/* <div className={sideBarOpen ? "sideBarState active" : "sideBarState"}> */}
            <img src={sidebar_profile} alt="Photo profile" className="photo-profile" />
        </div>
    )
}

export default SideBar