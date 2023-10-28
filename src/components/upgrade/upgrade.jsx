import React from "react";
import "./upgrade.css"
import SearchBar from "../commonComponents/searchBar/searchBar";
import UpgradeForm from "../upgradeForm/upgradeForm";
import { useLocation } from "react-router-dom";

function Upgrate() {
  const location = useLocation();
  const { state } = location;
  const { selectedForComparison, selectedModel } = state;

  if (!state || !selectedForComparison) {
    return (
      <div>
        <p>No se han seleccionado productos para comparar o el modelo no está disponible.</p>
      </div>
    );
  }

  return (
    <div>
      <SearchBar />
      <div className="upgrade-container">
        <div>
          <h2>Detalles del Producto</h2>
          <table>
            <tbody>
              <tr>
                <td>Modelo Comercial</td>
                <td>{selectedModel.modelo_comercial}</td>
              </tr>
              <tr>
                <td>Precio</td>
                <td>{selectedModel.Precio}</td>
              </tr>
              <tr>
                <td>SimCards</td>
                <td>{selectedModel.SimCards}</td>
              </tr>
              {/* Agrega más campos según sea necesario */}
            </tbody>
          </table>

          <h2>Productos para comparar</h2>
          <table>
            <thead>
              <tr>
                <th>Modelo Comercial</th>
                <th>Precio</th>
                <th>SimCards</th>
              </tr>
            </thead>
            <tbody>
              {selectedForComparison.map((product, index) => (
                <tr key={index}>
                  <td>{product.modelo_comercial}</td>
                  <td>{product.Precio}</td>
                  <td>{product.SimCards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <UpgradeForm />
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
