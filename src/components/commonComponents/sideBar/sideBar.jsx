import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import './sideBar.css';
import sidebar_profile from '../../../assets/sidebar_profile.png';
import arrow_open from "../../../assets/arrow_open.png";
import check from "../../../assets/check.png";
import config from "../../../assets/config.png";
import home from "../../../assets/home.png";
import off from "../../../assets/off.png";
import reports from "../../../assets/reports.png";
import time from "../../../assets/time.png";
import write from "../../../assets/write.png";

function SideBar() {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    return (
        <div className={`sidebar ${sideBarOpen ? "active" : ""}`}>
            <button onClick={toggleSideBar} className="horizontally-arrow">
                <img src={arrow_open} alt="horizontally-arrow" />
            </button >
            <img src={sidebar_profile} alt="photo profile" className="photo-profile" />
            <ul className={`sidebar-menu ${sideBarOpen ? "active" : ""}`} >
                <li>
                    <img src={home} alt="horizontally-arrow" className="icon" />
                    <p>Principal</p>
                </li>
                <li>
                    <img src={check} alt="inventary" className="icon" />
                    <p>Inventarios</p>
                </li>
                <li>
                    <img src={write} alt="warranty registration" className="icon" />
                    <p>Nuevo registro de garantía</p>
                </li>
                <li>
                    <img src={time} alt="history" className="icon" />
                    <p>Historial</p>
                </li>
                <li>
                    <img src={reports} alt="reports" className="icon" />
                    <p>Reportes</p>
                </li>
                <li>
                    <img src={config} alt="profile-settings" className="icon" />
                    <p>Ajustes de perfil</p>
                </li>
                <li className="logout">
                    <img src={off} alt="logout" className="icon" />
                    <p>Cerrar sesión</p>
                </li>
            </ul>
        </div>
    )
}

export default SideBar