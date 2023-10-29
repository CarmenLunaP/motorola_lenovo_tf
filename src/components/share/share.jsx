import React from "react";
import "./share.css";
import SearchBar from "../commonComponents/searchBar/searchBar";
import SideBar from "../commonComponents/sideBar/sideBar";
import { Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import WhatsApp from "@mui/icons-material/WhatsApp";
import MailOutlined from "@mui/icons-material/MailOutlined";

function Share() {
  return (
    <div className="share-content-container">
      <SideBar />
      <div className="compartir">
        <SearchBar />
        <div className="fondo">
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
          <div className="mensaje-final">
            <span>
              <p>Memoria RAM: De 2GB a 6GB.</p>
              <p>Memoria ROM: De 32GB a 128GB.</p>
              <p>Cámaras:De 2 a 3 cámaras.</p>
              <p>Memoria ROM: De 32GB a 128GB.</p>
              <p>Resolución de la cámara principal: De 13MP a 64MP.</p>
            </span>
          </div>
          <div className="mensaje-final">
            <Button
              className="btn-share-comparisonTable"
              startIcon={<ShareIcon />}
              style={{
                color: "#111111",
              }}
            >
              Compartir
            </Button>
            <Button
              startIcon={<WhatsApp />}
              style={{
                color: "#111111",
              }}
            />
            <Button
              startIcon={<MailOutlined />}
              style={{
                color: "#111111",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
