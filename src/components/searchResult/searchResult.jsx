import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResult() {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.selectedModel) {
    return <div>No se ha seleccionado un modelo.</div>;
  }

  const selectedModel = state.selectedModel;

  return (
    <div>
      <h1>Modelo seleccionado</h1>
      <p>Modelo Comercial: {selectedModel.modelo_comercial}</p>
      <p>Modelo Técnico: {selectedModel.modelo_tecnico}</p>
      <p>Modelo precio: {selectedModel.Precio}</p>
      {/* Mostrar otros detalles del modelo aquí */}
    </div>
  );
}

export default SearchResult;

