import React from 'react';
import Home_Encabezado from "../../assets/Home_Encabezado.png";
import "./banner.css";


function Banner() {
    return (
        <div className="banner-container">
            <div>
                <img src={Home_Encabezado} className='banner-img' />
            </div>
            <div>
                <h3>Bienvenido a tu centro de garantía Motorola!</h3>
                <p>Esta es tu plataforma exlusiva para gestionar cambios por garantia de manera rápida y eficiente</p>
                <button onClick={() => alert("click")}>
                    Ver tutorial
                </button>
            </div>
        </div>
    );
}

export default Banner;