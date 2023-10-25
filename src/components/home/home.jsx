import React from "react";
import SearchBar from "../commonComponents/searchBar/searchBar";
import "./home.css";
import data from "../../data.json";

function printCards(data) {
  // se clona para proteger la integridad de los datos porque .sort() modifica array original
  const sortedData = [...data.models];

  // ordenado por inventario de menor a mayor
  sortedData.sort((a, b) => b.Inventario - a.Inventario);

  return sortedData.map ((item, index) => ( // tomar cada elemento para crear la tarjeta según el index
    <div key={index} className="card">
      <div>
      <h2>{item.modelo_comercial}</h2>
      <img src={item.img} alt={item.modelo_comercial} className="model"/>
      <p>Stock: {item.Inventario}</p>
      </div>
    </div>
  ));
}

function Home() {

  return (
    <div>
      <SearchBar />
      <div className="card-container">
        {printCards(data)}
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