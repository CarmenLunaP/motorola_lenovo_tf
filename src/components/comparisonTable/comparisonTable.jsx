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
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SaveIcon from "@mui/icons-material/Save";
import ShareIcon from "@mui/icons-material/Share";

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
      <div className="btn-volver-container">
        <Link to="/searchResult.jsx">
          <div className="volver-content">
            <span> <ArrowBackIosIcon /> Volver </span>
          </div>
        </Link>
      </div>
      <h2 className="Tabla-comparativa">Tabla Comparativa</h2>
      <div className="container-restarShareSave-comparisonTable">
        <div className="table-comparisonTable">
          <div>
            <Table className="myTable">
              <TableBody>
                <TableRow>
                  <TableCell
                    align="center"
                    className="img-tablecomparison-box"
                  ></TableCell>
                  <TableCell align="center" className="model-commercial-cell">
                    <img
                      src={selectedModel.img}
                      alt={selectedModel.modelo_comercial}
                      className="img-tablecomparison-box"
                    />
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell
                      align="center"
                      key={index}
                      className="model-cell"
                    >
                      <img
                        src={product.img}
                        alt={product.modelo_comercial}
                        className="img-tablecomparison-box"
                      />
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    Modelo Comercial
                  </TableCell>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    {selectedModel.modelo_comercial}
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell
                      align="center"
                      className="background-title-table-comparisonTable"
                      key={index}
                    >
                      {product.modelo_comercial}
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    Modelo Técnico
                  </TableCell>
                  <TableCell align="center">
                    {selectedModel.modelo_tecnico}
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.modelo_tecnico}
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    Precio
                  </TableCell>
                  <TableCell align="center">${selectedModel.Precio}</TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      ${product.Precio}
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    Stock
                  </TableCell>
                  <TableCell align="center">
                    {selectedModel.Inventario}
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.Inventario}
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    SimCards
                  </TableCell>
                  <TableCell align="center">{selectedModel.SimCards}</TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.SimCards}
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    RAM
                  </TableCell>
                  <TableCell align="center">
                    {selectedModel.mem_RAM_GB} GB
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.mem_RAM_GB} GB
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    ROM
                  </TableCell>
                  <TableCell align="center">
                    {selectedModel.mem_ROM_GB} GB
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.mem_ROM_GB} GB
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    Cantidad de Lentes
                  </TableCell>
                  <TableCell align="center">
                    {selectedModel.lentes_camara}
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.lentes_camara}
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    Capacidad de la Batería
                  </TableCell>
                  <TableCell align="center">
                    {selectedModel.battery_capacity} mAh/{" "}
                    {selectedModel.battery_charging}
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.battery_capacity} mAh/{" "}
                      {selectedModel.battery_charging}
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    Resolución del Lente Principal
                  </TableCell>
                  <TableCell align="center">
                    {selectedModel.ResolucionMax_MP} MP
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.ResolucionMax_MP} MP
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    Resolución de Cámara Frontal
                  </TableCell>
                  <TableCell align="center">
                    {selectedModel.ResolucionCamaraSelfie_MP} MP
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.ResolucionCamaraSelfie_MP} MP
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    Cantidad de Núcleos del Procesador
                  </TableCell>
                  <TableCell align="center">{selectedModel.Nucleos}</TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.Nucleos}
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    className="background-title-table-comparisonTable"
                  >
                    Velocidad Máxima del Procesador
                  </TableCell>
                  <TableCell align="center">
                    {selectedModel.Velocidad_Max_GHz} GHz
                  </TableCell>
                  {selectedForComparison.map((product, index) => (
                    <TableCell align="center" key={index}>
                      {product.Velocidad_Max_GHz} GHz
                    </TableCell>
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
                        onClick={() => handleSelect(product)}
                      />
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
        <div className="button-wrapper">
          <Button
            className="btn-save-comparisonTable"
            startIcon={<SaveIcon />}
            style={{
              backgroundColor: "#F5F5F5",
              color: "#DA1E28",
              borderRadius: "10px",
              width: "207px",
              height: "56px",
              margin: "0px 20px 0px 270px",
            }}
          >
            Reiniciar Busqueda
          </Button>
        
        
          <Button
            className="btn-share-comparisonTable"
            startIcon={<ShareIcon />}
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              width: "165px",
              height: "61px",
              color: "#111111",
              margin: "0px 20px 0px 450px",
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
              margin: "0 20px",
            }}
          >
            Guardar
          </Button>
          </div> 
          </div>
      
    </div>
  );
}

export default ComparisonTable;
