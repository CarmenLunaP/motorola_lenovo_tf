import React from "react";
import { useLocation } from "react-router-dom";

function ComparisonTable() {
  const location = useLocation();
  const selectedForComparison = location.state;

 
  if (!selectedForComparison || selectedForComparison.length === 0) {
    return (
      <div>
        <p>No se han seleccionado productos para comparar.</p>
      </div>
    );
  }

  const handleSelect = (product) => {
   
    console.log("Producto seleccionado:", product);
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
            <th>Acciones</th>
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
    </div>
  );
}

export default ComparisonTable;


