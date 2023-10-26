import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../../data.json";
import SearchBar from "../commonComponents/searchBar/searchBar";

function SearchResult() {
  const [filteredModels, setFilteredModels] = useState([]);
  const location = useLocation();
  const { state } = location;

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
    return filterModelsByRAM().filter((model) => {
      const modelROM = parseFloat(model.mem_ROM_GB);
      const selectedROM = parseFloat(selectedModel.mem_ROM_GB);
      console.log(modelROM >= selectedROM);
      return modelROM >= selectedROM;
    });
  };

  useEffect(() => {
    filterModelsByPrice(selectedModel);
  }, [selectedModel]);

  return (
    <div>
        <SearchBar />
      <h1>Modelo seleccionado</h1>
      <img src={selectedModel.img} alt={selectedModel.modelo_comercial} className="model"/>
      <p>Modelo Comercial: {selectedModel.modelo_comercial}</p>
      <p>Modelo Técnico: {selectedModel.modelo_tecnico}</p>
      <p>Precio: {selectedModel.Precio}</p>
      <p>Stock: {selectedModel.Inventario}</p>
      <p>SimCard: {selectedModel.SimCards}</p>
      <p>RAM: {selectedModel.mem_RAM_GB}</p>
      <p>ROM: {selectedModel.mem_ROM_GB}</p>
      <p>Cantidad de lentes: {selectedModel.lentes_camara}</p>
      <p>Capacidad de la batería: {selectedModel.battery_capacity}</p>
      <p>Resolución del lente principal: {selectedModel.ResolucionMax_MP}</p>
      <p>
        Resolución de cámara frontal: {selectedModel.ResolucionCamaraSelfie_MP}
      </p>
      <p>Cantidad de núcleos del procesador: {selectedModel.Nucleos}</p>
      <p>Velocidad máxima del procesador: {selectedModel.Velocidad_Max_GHz}</p>

      <h2>Modelos similares:</h2>
      <ul>
        {filterModelsByROM().map((model, index) => (
          <li key={index}>
               <p>{selectedModel.img}</p>
               <img src={selectedModel.img} alt={selectedModel.modelo_comercial} className="model"/>
            {model.modelo_comercial} / {model.modelo_tecnico}
            <p>Precio: {model.Precio}</p>
            <p>Stock: {model.Inventario}</p>
            <p>SimCards: {model.SimCards}</p>
            <p>Memoria RAM: {model.mem_RAM_GB}</p>
            <p>Memoria ROM: {model.mem_ROM_GB}</p>
            <p>Cantidad de lentes: {model.lentes_camara}</p>
            <p>Capacidad de la batería: {model.battery_capacity}</p>
            <p>Resolución del lente principal: {model.ResolucionMax_MP}</p>
            <p>
              Resolución de cámara frontal: {model.ResolucionCamaraSelfie_MP}
            </p>
            <p>Cantidad de núcleos del procesador: {model.Nucleos}</p>
            <p>Velocidad máxima del procesador: {model.Velocidad_Max_GHz}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import data from "../../data.json";

// function SearchResult() {
//   const [filteredModels, setFilteredModels] = useState([]);
//   const location = useLocation();
//   const { state } = location;

//   if (!state || !state.selectedModel) {
//     return <div>No se ha seleccionado un modelo.</div>;
//   }

//   const selectedModel = state.selectedModel;

//   const filterModelsByPrice = (selectedModel) => {
//     const priceThreshold = selectedModel.Precio + 50;
//     const filteredModels = data.models.filter((model) => {
//       const modelPrice = parseFloat(model.Precio);
//       const priceCondition =
//         modelPrice <= priceThreshold && modelPrice >= selectedModel.Precio;
//       return priceCondition;
//     });

//     filteredModels.sort((a, b) => parseFloat(a.Precio) - parseFloat(b.Precio));

//     setFilteredModels(filteredModels);
//   };

//   // Lógica para filtrar modelos por SimCard
//   const filterModelsBySimCards = () => {
//     if (selectedModel.SimCards === "Single") {
//       return filteredModels;
//     } else {
//       return filteredModels.filter((model) => model.SimCards === "Dual");
//     }
//   };

//   // Lógica para filtrar modelos por RAM
//   const filterModelsByRAM = () => {
//     return filterModelsBySimCards().filter((model) => {
//       const modelRAM = parseFloat(model.mem_RAM_GB);
//       const selectedRAM = parseFloat(selectedModel.mem_RAM_GB);
//       return modelRAM >= selectedRAM;
//     });
//   };

//   // Lógica para filtrar modelos por ROM
//   const filterModelsByROM = () => {
//     return  filterModelsByRAM ().filter((model) => {
//       const modelROM = parseFloat(model.mem_ROM_GB);
//       const selectedROM = parseFloat(selectedModel.mem_ROM_GB);
//       return modelROM >= selectedROM;
//     });
//   };

//   // Llama a las funciones de filtro al cargar el componente
//   useEffect(() => {
//     filterModelsByPrice(selectedModel);
//   }, [selectedModel]);

//   return (
//     <div>
//       <h1>Modelo seleccionado</h1>
//       <p>Modelo Comercial: {selectedModel.modelo_comercial}</p>
//       <p>Modelo Técnico: {selectedModel.modelo_tecnico}</p>
//       <p>Precio: {selectedModel.Precio}</p>
//       <p>SimCard: {selectedModel.SimCards}</p>
//       <p>RAM: {selectedModel.mem_RAM_GB}</p>
//       <p>ROM: {selectedModel.mem_ROM_GB}</p>

//       <h2>Modelos similares:</h2>
//       <ul>
//         {filterModelsByRAM().map((model, index) => (
//           <li key={index}>
//             {model.modelo_comercial} / {model.modelo_tecnico}
//             <p>Precio: {model.Precio}</p>
//             <p>SimCards: {model.SimCards}</p>
//             <p>RAM: {model.mem_RAM_GB}</p>
//             <p>ROM: {selectedModel.mem_ROM_GB}</p>

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchResult;

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import data from "../../data.json";

// function SearchResult() {
//   const [filteredModels, setFilteredModels] = useState([]);

//   const location = useLocation();
//   const { state } = location;

//   if (!state || !state.selectedModel) {
//     return <div>No se ha seleccionado un modelo.</div>;
//   }

//   const selectedModel = state.selectedModel;

//   // Función para cargar y filtrar modelos en base al precio
//   const filterModelsByPrice = (selectedModel) => {
//     const priceThreshold = selectedModel.Precio + 50; // Precio límite
//     const filteredModels = data.models.filter((model) => {
//       const modelPrice = parseFloat(model.Precio);

//       // Condición 1: Precio dentro del rango
//       const priceCondition =
//         modelPrice <= priceThreshold && modelPrice >= selectedModel.Precio;

//       return priceCondition;
//     });

//     // Ordena los modelos por precio de menor a mayor
//     filteredModels.sort((a, b) => parseFloat(a.Precio) - parseFloat(b.Precio));

//     setFilteredModels(filteredModels);
//     console.log(filteredModels)
//   };

//   // Condición 2: Filtra con base a las SimCards
//   const modelsFilteredBySimCards = filteredModels.filter((model) => {
//     if (selectedModel.SimCards === "Single") {
//       return filteredModels;
//     } else {
//       return model.SimCards === "Dual";
//     }

//   });
//   console.log(modelsFilteredBySimCards),

//   // Llama a la función de filtro al cargar el componente
//   useEffect(() => {
//     filterModelsByPrice(selectedModel);
//   }, [selectedModel]);

//   return (
//     <div>
//       <h1>Modelo seleccionado</h1>
//       <p>Modelo Comercial: {selectedModel.modelo_comercial}</p>
//       <p>Modelo Técnico: {selectedModel.modelo_tecnico}</p>
//       <p>Precio: {selectedModel.Precio}</p>
//       <p>SimCard: {selectedModel.SimCards}</p>
//       <p>RAM: {selectedModel.mem_RAM_GB}</p>

//       <h2>Modelos similares:</h2>
//       <ul>
//         {modelsFilteredBySimCards.map((model, index) => (
//           <li key={index}>
//             {model.modelo_comercial} / {model.modelo_tecnico}
//             <p>Precio: {model.Precio}</p>
//             <p>SimCards: {model.SimCards}</p>
//             <p>RAM: {selectedModel.mem_RAM_GB}</p>
//             {/* Agregar otros detalles del modelo si es necesario */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchResult;

//   // Condición 3: Filtra con base a las SimCards
//   const modelsFilteredByRam = modelsFilteredBySimCards.filter((model) => {
//     if (selectedModel.mem_RAM_GB >= selectedModel.mem_RAM_GB ) {
//       return model.mem_RAM_GB;
//     }
//     })

// Filtra los modelos en base a la memoria RAM (mem_RAM_GB)
//   const modelsFilteredByRAM = modelsFilteredBySimCards.filter((model) => {
//     return model.mem_RAM_GB >= selectedModel.mem_RAM_GB;
//   });

/*-----------------------*/

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import data from "../../data.json";

// function SearchResult() {
//     const [filteredModels, setFilteredModels] = useState([]);

//   const location = useLocation();
//   const { state } = location;

//   if (!state || !state.selectedModel) {
//     return <div>No se ha seleccionado un modelo.</div>;
//   }

//   const selectedModel = state.selectedModel;

//  // Función para cargar y filtrar modelos en base al precio
//   const filterModelsByPrice = (selectedModel) => {
//     const priceThreshold = selectedModel.Precio + 50; // Precio límite

//     const filteredModels = data.models.filter((model) => {
//       const modelPrice = parseFloat(model.Precio);

//       // Condición 1: Precio dentro del rango
//       const priceCondition = modelPrice <= priceThreshold && modelPrice >= selectedModel.Precio;

//       // Condición 2: Mismo número de "SimCards" o más
//       const simCardsCondition =
//         (model.SimCards === "Dual" && selectedModel.SimCards === "Dual") ||
//         (model.SimCards === "Single");

//       // Combinar ambas condiciones
//       return priceCondition && simCardsCondition;
//     });

//     // Ordena los modelos por precio de menor a mayor
//     filteredModels.sort((a, b) => parseFloat(a.Precio) - parseFloat(b.Precio));

//     setFilteredModels(filteredModels);
//   };

// //   // Función para cargar y filtrar modelos en base al precio
// //   const filterModelsByPrice = (selectedModel) => {
// //     const priceThreshold = selectedModel.Precio + 50; // Precio límite

// //     const filteredModels = data.models.filter((model) => {
// //       const modelPrice = parseFloat(model.Precio);
// //       return modelPrice <= priceThreshold && modelPrice >= selectedModel.Precio;
// //     });

// //     // Ordenar por precio de menor a mayor
// //     filteredModels.sort((a, b) => parseFloat(a.Precio) - parseFloat(b.Precio));

// //     setFilteredModels(filteredModels);
// //   };

//   // Llama a  search bar para cargar el componente
//   useEffect(() => {
//     filterModelsByPrice(selectedModel);
//   }, [selectedModel]);

//   return (
//     <div>
//       <h1>Modelo seleccionado</h1>
//       <p>Modelo Comercial: {selectedModel.modelo_comercial}</p>
//       <p>Modelo Técnico: {selectedModel.modelo_tecnico}</p>
//       <p>Modelo precio: {selectedModel.Precio}</p>

//       <h2>Modelos similares:</h2>
//       <ul>
//         {filteredModels.map((model, index) => (
//           <li key={index}>
//             {model.modelo_comercial} / {model.modelo_tecnico}
//             <p>Precio: {model.Precio}</p>
//             <p>Precio: {model.SimCards}</p>
//             {/* Agregar otros detalles del modelo si es necesario */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchResult;

/*hasta aqui funciona el renderizado del seacrh*/
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function SearchResult() {
//   const location = useLocation();
//   const { state } = location;

//   if (!state || !state.selectedModel) {
//     return <div>No se ha seleccionado un modelo.</div>;
//   }

//   const selectedModel = state.selectedModel;

//   return (
//     <div>
//       <h1>Modelo seleccionado</h1>
//       <p>Modelo Comercial: {selectedModel.modelo_comercial}</p>
//       <p>Modelo Técnico: {selectedModel.modelo_tecnico}</p>
//       <p>Modelo precio: {selectedModel.Precio}</p>
//       {/* Mostrar otros detalles del modelo aquí */}
//     </div>
//   );
// }

// export default SearchResult;
