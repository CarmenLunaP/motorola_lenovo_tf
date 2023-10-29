import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../../data.json";
import SearchBar from "../commonComponents/searchBar/searchBar";
import "./searchResult.css";
import SideBar from "../commonComponents/sideBar/sideBar.jsx";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function SearchResult() {
  const [filteredModels, setFilteredModels] = useState([]);
  const location = useLocation();
  const { state } = location;
  const [selectedForComparison, setSelectedForComparison] = useState([]);
  const navigate = useNavigate();
  const [sideBarOpen, setSideBarOpen] = useState(false);

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
      setSelectedForComparison(
        selectedForComparison.filter((item) => item !== model)
      );
    } else {
      // Si no está seleccionado, agrégalo a la lista
      setSelectedForComparison([...selectedForComparison, model]);
    }
  };

  const handleShowSelected = () => {
    navigate("/comparisonTable", {
      state: { selectedForComparison, selectedModel },
    });
    console.log(selectedForComparison, selectedModel);
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
      <div className="searchResult-container">
        <SideBar />
        <div className="content-container-searchResult">
          <SearchBar
            sideBarOpen={sideBarOpen}
            setSideBarOpen={setSideBarOpen}
          />
  <h2 className="Tabla-comparativa">Resultado de Búsqueda</h2>
          <div className="search-result-all">
        
            <div className="model-container">
              <div className="model-info">
                <h1 className="title-model-info">Producto de búsqueda</h1>
                <img
                  src={selectedModel.img}
                  alt={selectedModel.modelo_comercial}
                  className="model-searchResult"
                />
                <p className="title-card-searchResult">
                  {selectedModel.modelo_comercial}
                </p>
                <p className="title-card-searchResult">
                  {" "}
                  {selectedModel.modelo_tecnico}
                </p>
                <p className="title-card-searchResult">
                  ${selectedModel.Precio}
                </p>
                <div className="inf-card-searchResult">
                  <p className="description-cards">• SimCard: {selectedModel.SimCards}</p>
                  <p className="description-cards">• RAM: {selectedModel.mem_RAM_GB}</p>
                  <p className="description-cards">• ROM: {selectedModel.mem_ROM_GB}</p>
                  <p className="description-cards">• Cantidad de lentes: {selectedModel.lentes_camara}</p>
                  <p className="description-cards"> 
                  • Capacidad de la batería: {selectedModel.battery_capacity}
                  </p>
                </div>
                <p className="description-cards-stock">Stock: {selectedModel.Inventario}</p>
              </div>
            </div>

            <div className="recommended-models">
              {filteredRecommendedModels.map((model, index) => (
                <div  key={index}>
                  <div className="model-card">
                  <h1 className="title-model-card">Producto recomendado</h1>
                 
                  <img
                    src={model.img}
                    alt={model.modelo_comercial}
                    className="model-searchResult"
                  />
                  <p className="title-card-searchResult">
                    {model.modelo_comercial}
                  </p>
                  <p className="title-card-searchResult">
                    {model.modelo_tecnico}
                  </p>
                  <p className="title-card-searchResult">${model.Precio}</p>
                  <div className="inf-card-searchResult">
                    <p className="description-cards">• SimCard: {model.SimCards}</p>
                    <p className="description-cards">• RAM: {model.mem_RAM_GB}</p>
                    <p className="description-cards">• ROM: {model.mem_ROM_GB}</p>
                    <p className="description-cards">• Cantidad de lentes: {model.lentes_camara}</p>
                    <p className="description-cards">• Capacidad de la batería: {model.battery_capacity}</p>
                  </div>
                  <p  className="description-cards-stock" >Stock: {model.Inventario}</p>
                                    
                  </div>
                  <div className="container-check-searchResult">
                  <input
                   className="check-searchResult"
                    type="checkbox"
                    onChange={() => handleComparisonChange(model)}
                    checked={selectedForComparison.includes(model)}
                  />
                  <p className="title-check">Comparar</p>
                  </div>
                </div>

              ))}
              
            </div>
          </div>
          <div className="container-btn-searchResult">
          {/* <Link to="/comparisonTable"> */}
          <button className="btn-searchResult" onClick={handleShowSelected}>Ver tabla comparativa</button>

          {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
