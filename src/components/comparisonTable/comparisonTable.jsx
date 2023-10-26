import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ComparisonTable() {
  const location = useLocation();
  const { state } = location;
  const { selectedForComparison, selectedModel } = location.state;
  const navigate = useNavigate();

  console.log(selectedForComparison);
  console.log(selectedModel);

  if (!state || !selectedForComparison) {
    return (
      <div>
        <p>No se han seleccionado productos para comparar.</p>
      </div>
    );
  }

  const handleSelect = () => {
    navigate("/upgrade", { state: {selectedForComparison, selectedModel} });
    console.log(selectedForComparison);
  };

  return (
    <div>
      <h2>Tabla Comparativa</h2>
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
              <td>
                <button onClick={() => handleSelect(product)}>Seleccionar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Agrega una fila adicional para mostrar los detalles del modelo seleccionado */}
      <h2>Detalles del Modelo Seleccionado</h2>
      <table>
        <thead>
          <tr>
            <th>Modelo Comercial</th>
            <th>Precio</th>
            <th>SimCards</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedModel.modelo_comercial}</td>
            <td>{selectedModel.Precio}</td>
            <td>{selectedModel.SimCards}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;

