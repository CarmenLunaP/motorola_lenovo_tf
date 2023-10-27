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
            <img src={sidebar_profile} alt="Photo profile" className="photo-profile" />
            <ul className={`sidebar-menu ${sideBarOpen ? "active" : ""}`}>
                    <li>
                        <i className="fa fa-search"></i>
                        <p>Principal</p>
                    </li>
                    <li>
                        <i className="fa fa-search"></i>
                        <p>Inventarios</p>
                    </li>
                    <li>
                        <i className="fa fa-search"></i>
                        <p>Nuevo registro de garantía</p>
                    </li>
                    <li>
                        <i className="fa fa-search"></i>
                        <p>Historial</p>
                    </li>
                    <li>
                        <i className="fa fa-search"></i>
                        <p>Reportes</p>
                    </li>
                    <li>
                        <i className="fa fa-search"></i>
                        <p>Ajustes de perfil</p>
                    </li>
                    <li className="logout">
                        <i className="fa fa-search"></i>
                        <p>Cerrar sesión</p>
                    </li>
                </ul>
        </div>
    )
}

export default SideBar