import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../../data.json";
import SearchBar from "../commonComponents/searchBar/searchBar";
import "./searchResult.css";

function SearchResult() {
  const [filteredModels, setFilteredModels] = useState([]);
  const location = useLocation();
  const { state } = location;
  const [selectedForComparison, setSelectedForComparison] = useState([]);
  const navigate = useNavigate();

  if (!state || !state.selectedModel) {
    return <div>No se ha seleccionado un modelo.</div>;
  }

  const selectedModel = state.selectedModel;

  const filterModelsByPrice = (selectedModel) => {
    const priceThreshold = selectedModel.Precio + 50;
    const filteredModels = data.models.filter((model) => {
      const modelPrice = parseFloat(model.Precio);
      const priceCondition =
        modelPrice <= priceThreshold && modelPrice >= selectedModel.Precio;
      return priceCondition;
    });

    filteredModels.sort((a, b) => parseFloat(a.Precio) - parseFloat(b.Precio));

    setFilteredModels(filteredModels);
  };

  const filterModelsBySimCards = () => {
    if (selectedModel.SimCards === "Single") {
      return filteredModels;
    } else {
      return filteredModels.filter((model) => model.SimCards === "Dual");
    }
  };

  const filterModelsByRAM = () => {
    return filterModelsBySimCards().filter((model) => {
      const modelRAM = parseFloat(model.mem_RAM_GB);
      const selectedRAM = parseFloat(selectedModel.mem_RAM_GB);
      return modelRAM >= selectedRAM;
    });
  };

  const filterModelsByROM = () => {
    const filteredModels = filterModelsByRAM().filter((model) => {
      const modelROM = parseFloat(model.mem_ROM_GB);
      const selectedROM = parseFloat(selectedModel.mem_ROM_GB);
      return modelROM >= selectedROM && model.Inventario >= 1;
    });

    return filteredModels.slice(0, 5); // Limitar a los primeros 5 modelos
  };

  const handleComparisonChange = (model) => {
    // Manejar el cambio en la selección de productos
    if (selectedForComparison.includes(model)) {
      // Si ya está seleccionado, quitarlo de la lista
      setSelectedForComparison(selectedForComparison.filter((item) => item !== model));
    } else {
      // Si no está seleccionado, agrégalo a la lista
      setSelectedForComparison([...selectedForComparison, model]);
    }
  };

  const handleShowSelected = () => {
    
    navigate("/comparisonTable", { state: {selectedForComparison, selectedModel} });
    console.log (selectedForComparison, selectedModel )
  };

  
  

  // Filtrar los modelos recomendados y excluir el modelo de búsqueda
  const filteredRecommendedModels = filterModelsByROM().filter(
    (model) => model.modelo_comercial !== selectedModel.modelo_comercial
  );

  useEffect(() => {
    filterModelsByPrice(selectedModel);
  }, [selectedModel]);

  return (
    <div>
      <SearchBar />
      <div className="search-result-all">
        <div className="model-container">
          <div className="model-info">
            <h1>Producto de búsqueda</h1>
            <img src={selectedModel.img} alt={selectedModel.modelo_comercial} className="model" />
            <p>Modelo Comercial: {selectedModel.modelo_comercial}</p>
            <p>Modelo Técnico: {selectedModel.modelo_tecnico}</p>
            <p>Precio: {selectedModel.Precio}</p>
            <p>Stock: {selectedModel.Inventario}</p>
            <p>SimCard: {selectedModel.SimCards}</p>
            <p>RAM: {selectedModel.mem_RAM_GB}</p>
            <p>ROM: {selectedModel.mem_ROM_GB}</p>
            <p>Cantidad de lentes: {selectedModel.lentes_camara}</p>
            <p>Capacidad de la batería: {selectedModel.battery_capacity}</p>
            {/* <p>Resolución del lente principal: {selectedModel.ResolucionMax_MP}</p>
            <p>Resolución de cámara frontal: {selectedModel.ResolucionCamaraSelfie_MP}</p>
            <p>Cantidad de núcleos del procesador: {selectedModel.Nucleos}</p>
            <p>Velocidad máxima del procesador: {selectedModel.Velocidad_Max_GHz}</p> */}
          </div>
        </div>
        <div className="recommended-models">
          {filteredRecommendedModels.map((model, index) => (
            <div className="model-card" key={index}>
              <h1>Producto recomendado</h1>
              <input
                type="checkbox"
                onChange={() => handleComparisonChange(model)}
                checked={selectedForComparison.includes(model)}
              />
              <img src={model.img} alt={model.modelo_comercial} className="model" />
              <p>Modelo Comercial: {model.modelo_comercial}</p>
              <p>Modelo Técnico: {model.modelo_tecnico}</p>
              <p>Precio: {model.Precio}</p>
              <p>Stock: {model.Inventario}</p>
              <p>SimCard: {model.SimCards}</p>
              <p>RAM: {model.mem_RAM_GB}</p>
              <p>ROM: {model.mem_ROM_GB}</p>
              <p>Cantidad de lentes: {model.lentes_camara}</p>
              <p>Capacidad de la batería: {model.battery_capacity}</p>
              {/* <p>Resolución del lente principal: {model.ResolucionMax_MP}</p>
              <p>Resolución de cámara frontal: {model.ResolucionCamaraSelfie_MP}</p>
              <p>Cantidad de núcleos del procesador: {model.Nucleos}</p>
              <p>Velocidad máxima del procesador: {model.Velocidad_Max_GHz}</p> */}
            </div>
          ))}
        </div>
      </div>
      {/* <Link to="/comparisonTable"> */}
        <button onClick={handleShowSelected}>Ver tabla comparativa</button>
       
      {/* </Link> */}
    </div>
    
  );
}

export default SearchResult;

