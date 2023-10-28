import React from 'react';
import Home_Encabezado from "../../assets/Home_Encabezado.png";
import "./banner.css";
import tutorial from "../../assets/tutorial.png"


function Banner() {
    return (
        <div className="banner-container">
            <div>
                <img src={Home_Encabezado} className='banner-img' />
            </div>
            <div>
                <h1 className='h1-custom'>Bienvenido a tu centro de garantía Motorola!</h1>
                <p className='p-custom'>Esta es tu plataforma exclusiva para gestionar cambios por garantía de manera rápida y eficiente</p>
                <button className='btn-tutorial' onClick={() => alert("click")}>
                <img src={tutorial} alt="tutorial" className="icon" />
                    Ver tutorial
                </button>
            </div>
        </div>
    );
}

export default Banner;