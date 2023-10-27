import React, { useState } from "react";
import "./SearchBar.css";
import "font-awesome/css/font-awesome.min.css";
import logo_Motorola from "../../../assets/logo_Motorola.png";
import { useNavigate } from "react-router-dom"; // Importa useNavigate de React Router
import data from "../../../data.json";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  // accedo a la función de navegación
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setSelectedModel(null);
    if(query.trim()===""){
      setResults([]);
    }else{

    const matchingResults = data.models.filter((model) => {
      const modeloComercial = model.modelo_comercial.toLowerCase();
      const modeloTecnico = model.modelo_tecnico.toLowerCase();
      const searchQueryLower = query.toLowerCase();

      return (
        modeloComercial.includes(searchQueryLower) ||
        modeloTecnico.includes(searchQueryLower)
      );
    });

    setResults(matchingResults);
  }
  };

  const handleModelSelection = (model) => {
    setSelectedModel(model);
    setResults([]);
    setSearchQuery(model.modelo_comercial + " / " + model.modelo_tecnico);
    console.log(model);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por modelo, referencia o código"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="lista-desplegable">
          {results.length > 0 && (
            <div className="search-results">
              <ul>
                {results.map((result, index) => (
                  <li key={index} onClick={() => handleModelSelection(result)}>
                    {result.modelo_comercial} / {result.modelo_tecnico}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {selectedModel && (
          <button
            className="search-button"
            onClick={() =>
              navigate("/searchResult", {
                state: { selectedModel: selectedModel },
              })
            }
          >
            <i className="fa fa-search"></i>
          </button>
        )}
      </div>
      <div className="logo-search-bar">
        <img src={logo_Motorola} alt="Motorola Logo" />
      </div>
    </div>
  );
}

export default SearchBar;
