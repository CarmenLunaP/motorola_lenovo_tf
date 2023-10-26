import React from "react";
import SearchBar from "../commonComponents/searchBar/searchBar";
import "./home.css";
import SideBar from "../commonComponents/sideBar/sideBar";
import Banner from "../banner/banner";
import data from "../../data.json";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de React Router






function printCards(data, handleNavigate) {
  // se clona para proteger la integridad de los datos porque .sort() modifica array original
  const sortedData = [...data.models];

  // ordenado por inventario de menor a mayor
  sortedData.sort((a, b) => b.Inventario - a.Inventario);

  return sortedData.map((item, index) => ( // tomar cada elemento para crear la tarjeta según el index
    <div key={index} onClick={() => handleNavigate(item)} className="card">
      <div className="specs">
        <h3>{item.modelo_comercial}</h3>
        <p>{item.modelo_tecnico}</p>
        <p>Stock: {item.Inventario}</p>
      </div>
      <div className="image-container">
        <img src={item.img} alt={item.modelo_comercial} className="model" />
      </div>



    </div>
  ));
}

function Home() {
  const navigate = useNavigate();
  const handleNavigate = (model) => {
    navigate('/searchResult', { state: { selectedModel: model } });
  };

  return (
    <div className="content-container">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="compartir">
        <SearchBar />
        <Banner />
        <div className="card-container">
          {printCards(data, handleNavigate)}
        </div>
      </div>
    </div>
  );
}

export default Home;

/*
<div>
      <h2>{model.modelo_comercial}</h2>
      <img src={model.img} alt={model.modelo_comercial} className="model"/>
      <p>${model.Precio}</p>
      <p>Año: {model.ano}</p>
      <p>Cantidad de SIM Cards: {model.SimCards}</p>
      <p>Memoria RAM: {model.mem_RAM_GB}</p>
      <p>Memoria ROM: {model.mem_ROM_GB}</p>
      <p>Cantidad de lentes: {model.lentes_camara}</p>
      <p>Capacidad de la batería: {model.battery_capacity}</p>
      <p>Resolución del lente principal: {model.ResolucionMax_MP}</p>
      <p>Resolución de cámara frontal: {model.ResolucionCamaraSelfie_MP}</p>
      <p>Cantidad de núcleos del procesador: {model.Nucleos}</p>
      <p>Velocidad máxima del procesador: {model.Velocidad_Max_GHz}</p>
      </div>
*/