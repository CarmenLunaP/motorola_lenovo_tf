import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
} from "@mui/material";
import "./ComparisonTable.css"; 
import SearchBar from "../commonComponents/searchBar/searchBar.jsx";
import "./comparisonTable.css";
import SideBar from "../commonComponents/sideBar/sideBar.jsx";
import MyCustomButton from "./myCustomButton.jsx";



function ComparisonTable() {
  const location = useLocation();
  const { state } = location;
  const { selectedForComparison, selectedModel } = location.state;
  const navigate = useNavigate();

  if (!state || !selectedForComparison) {
    return (
      <div>
        <Typography variant="h6">
          No se han seleccionado productos para comparar.
        </Typography>
      </div>
    );
  }

  const handleSelect = (product) => {
    navigate("/upgrade", {
      state: { selectedForComparison, selectedModel, selectedProduct: product },
    });
  };

  

  return (
    <div className="body-comparisonTable">
      <SideBar />
      <div className="searchBar-comparisonTable">
        <SearchBar />
      </div>
      <div>
        <button>volver</button>
      </div>
      <h2 className="Tabla-comparativa">Tabla Comparativa</h2>
      <div className="table-comparisonTable">
        <div>
          <Table className="myTable">
            <TableBody>
              <TableRow>
                <TableCell align="center" className="img-tablecomparison-box"></TableCell>
                <TableCell align="center" className="model-commercial-cell">
                  <img
                    src={selectedModel.img}
                    alt={selectedModel.modelo_comercial}
                    className="model"
                  />
                </TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center" key={index} className="model-cell">
                    <img
                      src={product.img}
                      alt={product.modelo_comercial}
                      className="model"
                    />
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center" className="background-title-table-comparisonTable">Modelo Comercial</TableCell>
                <TableCell align="center" className="background-title-table-comparisonTable">{selectedModel.modelo_comercial}</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center" className="background-title-table-comparisonTable" key={index}>{product.modelo_comercial}</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center"  className="background-title-table-comparisonTable">Modelo Técnico</TableCell>
                <TableCell align="center" >{selectedModel.modelo_tecnico}</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center" key={index}>{product.modelo_tecnico}</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center"  className="background-title-table-comparisonTable">Precio</TableCell>
                <TableCell align="center" >${selectedModel.Precio}</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center" key={index}>${product.Precio}</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center" className="background-title-table-comparisonTable">Stock</TableCell>
                <TableCell align="center" >{selectedModel.Inventario}</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center" key={index}>{product.Inventario}</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center" className="background-title-table-comparisonTable">SimCards</TableCell>
                <TableCell align="center" >{selectedModel.SimCards}</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center" key={index}>{product.SimCards}</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center" className="background-title-table-comparisonTable">RAM</TableCell>
                <TableCell align="center" >{selectedModel.mem_RAM_GB} GB</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center"  key={index}>{product.mem_RAM_GB} GB</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center"  className="background-title-table-comparisonTable">ROM</TableCell>
                <TableCell align="center" >{selectedModel.mem_ROM_GB} GB</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center"  key={index}>{product.mem_ROM_GB} GB</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center" className="background-title-table-comparisonTable">Cantidad de Lentes</TableCell>
                <TableCell align="center" >{selectedModel.lentes_camara}</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center"  key={index}>{product.lentes_camara}</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center" className="background-title-table-comparisonTable">Capacidad de la Batería</TableCell>
                <TableCell align="center" >{selectedModel.battery_capacity} mAh/ {selectedModel.battery_charging}</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center"  key={index}>{product.battery_capacity} mAh/ {selectedModel.battery_charging}</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center" className="background-title-table-comparisonTable">Resolución del Lente Principal</TableCell>
                <TableCell align="center" >{selectedModel.ResolucionMax_MP} MP</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center" key={index}>{product.ResolucionMax_MP} MP</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center" className="background-title-table-comparisonTable">Resolución de Cámara Frontal</TableCell>
                <TableCell align="center" >{selectedModel.ResolucionCamaraSelfie_MP} MP</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center"  key={index}>
                    {product.ResolucionCamaraSelfie_MP} MP
                  </TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center" className="background-title-table-comparisonTable">Cantidad de Núcleos del Procesador</TableCell>
                <TableCell align="center" >{selectedModel.Nucleos}</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center" key={index}>{product.Nucleos}</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell align="center" className="background-title-table-comparisonTable">Velocidad Máxima del Procesador</TableCell>
                <TableCell align="center" >{selectedModel.Velocidad_Max_GHz} GHz</TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center" key={index}>{product.Velocidad_Max_GHz} GHz</TableCell>
                ))}
              </TableRow>

              <TableRow>
                <TableCell> </TableCell>
                <TableCell> </TableCell>
                {selectedForComparison.map((product, index) => (
                  <TableCell align="center" key={index}>
                    <MyCustomButton  
                      className="btn-select-comparisonTable"
                      variant="contained"
                      
                      onClick={() => handleSelect(product)}/>
                    {/* <Button
                      className="btn-select-comparisonTable"
                      variant="contained"
                      color="primary"
                      onClick={() => handleSelect(product)}
                    >
                      Seleccionar
                    </Button> */}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ComparisonTable;


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Typography,
// } from "@mui/material";
// import "./ComparisonTable.css"; // Asegúrate de tener el archivo CSS para estilizar la tabla.
// import SearchBar from "../commonComponents/searchBar/searchBar.jsx";
// import "./comparisonTable.css";
// import SideBar from "../commonComponents/sideBar/sideBar.jsx"

// function ComparisonTable() {
//   const location = useLocation();
//   const { state } = location;
//   const { selectedForComparison, selectedModel } = location.state;
//   const navigate = useNavigate();

//   if (!state || !selectedForComparison) {
//     return (
//       <div>
//         <Typography variant="h6">
//           No se han seleccionado productos para comparar.
//         </Typography>
//       </div>
//     );
//   }

//   const handleSelect = (product) => {
//     navigate("/upgrade", {
//       state: { selectedForComparison, selectedModel, selectedProduct: product },
//     });
//   };

//   return (
//     <div className="body-comparisonTable">
//       <SideBar/>
//       <div className="searchBar-comparisonTable">
//         <SearchBar />
//       </div>
//       <h2 className="Tabla-comparativa">Tabla Comparativa</h2>
//       <div className="table-comparisonTable">
//         <div>
        
//           <Table className="myTable">
//             {/* <TableHead>
//               <TableRow>
//                 <TableCell> </TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}></TableCell>
//                 ))}
//               </TableRow>
//             </TableHead> */}
//             <TableBody>
//               <TableRow>
//                 <TableCell className="img-tablecomparison-box"></TableCell>
//                 <TableCell>
//                   <img
//                     src={selectedModel.img}
//                     alt={selectedModel.modelo_comercial}
//                     className="model"
//                   />
//                 </TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>
//                     <img
//                       src={product.img}
//                       alt={product.modelo_comercial}
//                       className="model"
//                     />
//                   </TableCell>
//                 ))}
//               </TableRow>

//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">Modelo Comercial</TableCell>
//                 <TableCell className="background-title-table-comparisonTable">{selectedModel.modelo_comercial}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.modelo_comercial}</TableCell>
//                 ))}
//               </TableRow>

//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">Modelo Técnico</TableCell>
//                 <TableCell>{selectedModel.modelo_tecnico}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.modelo_tecnico}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">Precio</TableCell>
//                 <TableCell>{selectedModel.Precio}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.Precio}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">Stock</TableCell>
//                 <TableCell>{selectedModel.Inventario}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.Inventario}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">SimCards</TableCell>
//                 <TableCell>{selectedModel.SimCards}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.SimCards}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">RAM</TableCell>
//                 <TableCell>{selectedModel.mem_RAM_GB}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.mem_RAM_GB}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">ROM</TableCell>
//                 <TableCell>{selectedModel.mem_ROM_GB}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.mem_ROM_GB}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">Cantidad de Lentes</TableCell>
//                 <TableCell>{selectedModel.lentes_camara}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.lentes_camara}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">Capacidad de la Batería</TableCell>
//                 <TableCell>{selectedModel.battery_capacity}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.battery_capacity}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">Resolución del Lente Principal</TableCell>
//                 <TableCell>{selectedModel.ResolucionMax_Md}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.ResolucionMax_Md}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">Resolución de Cámara Frontal</TableCell>
//                 <TableCell>{selectedModel.ResolucionCamaraSelfie_Mp}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>
//                     {product.ResolucionCamaraSelfie_Mp}
//                   </TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">Cantidad de Núcleos del Procesador</TableCell>
//                 <TableCell>{selectedModel.Nucleos}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.Nucleos}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell className="background-title-table-comparisonTable">Velocidad Máxima del Procesador</TableCell>
//                 <TableCell>{selectedModel.Velocidad_Max_GHz}</TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>{product.Velocidad_Max_GHz}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow>
//                 <TableCell> </TableCell>
//                 <TableCell> </TableCell>
//                 {selectedForComparison.map((product, index) => (
//                   <TableCell key={index}>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => handleSelect(product)}
//                     >
//                       Seleccionar
//                     </Button>
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ComparisonTable;

