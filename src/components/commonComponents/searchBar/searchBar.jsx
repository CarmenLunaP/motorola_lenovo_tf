import React, { useState } from 'react';
import './SearchBar.css';
import 'font-awesome/css/font-awesome.min.css';
import logo_Motorola from "../../../assets/logo_Motorola.png";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de React Router
import data from "../../../data.json";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  // accedo a la función de navegación
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setSelectedModel(null);

    if (query.length >= 4) {
      const matchingResults = data.models.filter(model => {
        const modeloComercial = model.modelo_comercial.toLowerCase();
        const modeloTecnico = model.modelo_tecnico.toLowerCase();
        const searchQueryLower = query.toLowerCase();

        return modeloComercial.includes(searchQueryLower) || modeloTecnico.includes(searchQueryLower);
      });

      setResults(matchingResults);
    } else {
      setResults([]);
    }
  };
  

  const handleModelSelection = (model) => {
    setSelectedModel(model);

    // voy la página de productos
    navigate('/searchResult', { state: { selectedModel: model } });
  };

  

  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por modelo, referencia o código"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <div className='lista-desplegable'>
        {results.length > 0 && (
          <div className="search-results">
            <ul>
              {results.map((result, index) => (
                <li key={index} onClick={() => handleModelSelection(result)}>
                  {result.modelo_comercial} / {result.modelo_tecnico}
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>

        <button className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className='logo-search-bar'>
        <img src={logo_Motorola} alt="Motorola Logo" />
      </div>
    </div>
  );
}

export default SearchBar;




// import React, { useState } from 'react';
// import './SearchBar.css';
// import 'font-awesome/css/font-awesome.min.css';
// import logo_Motorola from "../../../assets/logo_Motorola.png";
// import data from "../../../data.json";

// function SearchBar() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [focused, setFocused] = useState(false);
//   const [results, setResults] = useState([]);
//   const [selectedModel, setSelectedModel] = useState(null);

//   const handleSearch = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     setSelectedModel(null); // Limpiar el modelo seleccionado

//     if (query.length >= 5) {
//       // Búsqueda en el JSON por modelo_comercial y modelo_tecnico
//       const matchingResults = data.models.filter(model => {
//         const modeloComercial = model.modelo_comercial.toLowerCase();
//         const modeloTecnico = model.modelo_tecnico.toLowerCase();
//         const searchQueryLower = query.toLowerCase();

//         return modeloComercial.includes(searchQueryLower) || modeloTecnico.includes(searchQueryLower);
//       });

//       setResults(matchingResults);
//     } else {
//       setResults([]);
//     }
//   };

//   const handleModelSelection = (model) => {
//     setSelectedModel(model);
//   };

//   return (
//     <div className="search-bar">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Buscar por modelo, referencia o código"
//           value={searchQuery}
//           onChange={handleSearch}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//         />
//         {results.length > 0 && (
//           <div className="search-results">
//             <ul>
//               {results.map((result, index) => (
//                 <li key={index} onClick={() => handleModelSelection(result)}>
//                   {result.modelo_comercial} || {result.modelo_tecnico}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <button className="search-button">
//           <i className="fa fa-search"></i>
//         </button>
//       </div>
//       <div className='logo-search-bar'>
//         <img src={logo_Motorola} alt="Motorola Logo" />
//       </div>

//       {selectedModel && (
//         <div className="model-details">
//           <h2>{selectedModel.modelo_comercial}</h2>
//           <p>Modelo Técnico: {selectedModel.modelo_tecnico}</p>
//           {/* aqui podemos agregar todas las propiedades del objeto json que necesitamos*/}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;


