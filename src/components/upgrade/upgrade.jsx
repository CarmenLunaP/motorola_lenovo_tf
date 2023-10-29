import React from "react";
import "./upgrade.css";
import SearchBar from "../commonComponents/searchBar/searchBar";
import SideBar from "../commonComponents/sideBar/sideBar";
import UpgradeForm from "../upgradeForm/upgradeForm";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";

function Upgrate() {
  const location = useLocation();
  const { state } = location;
  const { selectedForComparison, selectedModel } = state;
  console.log(
    "selectedForComparison, selectedModel",
    selectedForComparison,
    selectedModel
  );

  if (!state || !selectedForComparison) {
    return (
      <div>
        <p>
          No se han seleccionado productos para comparar o el modelo no está
          disponible.
        </p>
      </div>
    );
  }

  return (
    <div>
      <SideBar />
      <div className="upgrade-content-container">
        <div>
          <SearchBar />
        </div>
        <div className="upgrade-container">
          <div className="upgrade-header">
            <h2 className="upgrade-Tabla-comparativa">Registrar Upgrade</h2>
            <div className="btn-volver-container">
              <Link to="/searchResult.jsx">
                <div className="volver-content">
                  <span>
                    {" "}
                    <ArrowBackIosIcon /> Volver{" "}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="upgrade-cards">
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
              <p className="title-card-searchResult">${selectedModel.Precio}</p>
              <div className="inf-card-searchResult">
                <p className="description-cards">
                  • SimCard: {selectedModel.SimCards}
                </p>
                <p className="description-cards">
                  • RAM: {selectedModel.mem_RAM_GB}
                </p>
                <p className="description-cards">
                  • ROM: {selectedModel.mem_ROM_GB}
                </p>
                <p className="description-cards">
                  • Cantidad de lentes: {selectedModel.lentes_camara}
                </p>
                <p className="description-cards">
                  • Capacidad de la batería: {selectedModel.battery_capacity}
                </p>
              </div>
              <p className="description-cards-stock">
                Stock: {selectedModel.Inventario}
              </p>
            </div>
            <div className="model-info">
              <h1 className="title-model-info">Producto Recomendado</h1>
              <img
                src={selectedForComparison[0].img}
                alt={selectedForComparison[0].modelo_comercial}
                className="model-searchResult"
              />
              <p className="title-card-searchResult">
                {selectedForComparison[0].modelo_comercial}
              </p>
              <p className="title-card-searchResult">
                {" "}
                {selectedForComparison[0].modelo_tecnico}
              </p>
              <p className="title-card-searchResult">
                ${selectedForComparison[0].Precio}
              </p>
              <div className="inf-card-searchResult">
                <p className="description-cards">
                  • SimCard: {selectedForComparison[0].SimCards}
                </p>
                <p className="description-cards">
                  • RAM: {selectedForComparison[0].mem_RAM_GB}
                </p>
                <p className="description-cards">
                  • ROM: {selectedForComparison[0].mem_ROM_GB}
                </p>
                <p className="description-cards">
                  • Cantidad de lentes: {selectedForComparison[0].lentes_camara}
                </p>
                <p className="description-cards">
                  • Capacidad de la batería:{" "}
                  {selectedForComparison[0].battery_capacity}
                </p>
              </div>
              <p className="description-cards-stock">
                Stock: {selectedForComparison[0].Inventario}
              </p>
            </div>
            <UpgradeForm />
          </div>
        </div>

        <div className="upgrade-btns">
          <Button
            className="btn-share-comparisonTable"
            startIcon={<ShareIcon />}
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              width: "165px",
              height: "61px",
              color: "#111111",
              margin: "0 100px",
            }}
          >
            Compartir
          </Button>
          <Button
            className="btn-save-comparisonTable"
            startIcon={<SaveIcon />}
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              width: "165px",
              height: "61px",
              color: "#111111",
            }}
          >
            Guardar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Upgrate;

// import React from "react";
// import { useLocation } from "react-router-dom";

// function Prueba() {
//     const location = useLocation();
//   const { state } = location;
//   const selectedForComparison = location.state;
// //   const navigate = useNavigate();

//   console.log(selectedForComparison);

//   if (!state || !selectedForComparison) {
//     return (
//       <div>
//         <p>No se han seleccionado productos para comparar.</p>
//       </div>
//     );
//   }

//     return (
//       <div>
//         <h2>Detalles del Producto</h2>
//         <table>

//         </table>
//       </div>
//     );
//   }

// export default Prueba;
