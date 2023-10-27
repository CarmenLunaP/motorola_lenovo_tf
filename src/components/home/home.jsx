import React, {useState} from "react";
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
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (model) => {
    navigate('/searchResult', { state: { selectedModel: model } });
  };

  return (
    <div className="home-container">
        <SideBar />
      <div className="content-container">
        <SearchBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        <Banner />
        <div className="card-container">
          {printCards(data, handleNavigate)}
        </div>
      </div>
    </div>
  );
}

export default Home;
