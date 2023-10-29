import React from "react";
import "./upgrade.css";
import SearchBar from "../commonComponents/searchBar/searchBar";
import SideBar from "../commonComponents/sideBar/sideBar";
import UpgradeForm from "../upgradeForm/upgradeForm";
import { useLocation } from "react-router-dom";

function Upgrate() {
  const location = useLocation();
  const { state } = location;
  const { selectedForComparison, selectedModel } = state;

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
        <SearchBar />

        <div className="upgrade-container">
          <div className="model-card">
            <h1>Producto seleccionado</h1>
            <img
              src={selectedModel.img}
              alt={selectedModel.modelo_comercial}
              className="model"
            />

            <p>Modelo Comercial: {selectedModel.modelo_comercial}</p>
            <p>Modelo Técnico: {selectedModel.modelo_tecnico}</p>
            <p>Precio: {selectedModel.Precio}</p>
            <p>Stock: {selectedModel.Inventario}</p>
            <p>SimCard: {selectedModel.SimCards}</p>
            <p>RAM: {selectedModel.mem_RAM_GB}</p>
            <p>ROM: {selectedModel.mem_ROM_GB}</p>
            <p>Cantidad de lentes: {selectedModel.lentes_camara}</p>
            <p>Capacidad de la batería: {selectedModel.battery_capacity}</p>
          </div>
          <UpgradeForm />
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
