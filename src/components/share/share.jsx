import React from "react";
import "./share.css";
import SearchBar from "../commonComponents/searchBar/searchBar";
import SideBar from "../commonComponents/sideBar/sideBar";

function Banner() {
  return (
    <div className="content-container">
      <SideBar />
      <div className="compartir">
        <SearchBar />
        <div class="share-content-container">
          <div className="msj-compartir">
            <p>Compartir</p>
          </div>
          <div className="mensaje-final">
            <p>
              Hemos recibido su Motorola E20 para servicio técnico o garantía,
              nos complace informarle que hemos decidido reemplazarlo por un
              nuevo Motorola G31 con notables mejoras:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
