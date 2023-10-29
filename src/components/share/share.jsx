import React from "react";
import "./share.css";
import SearchBar from "../commonComponents/searchBar/searchBar";
import SideBar from "../commonComponents/sideBar/sideBar";
import { Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import WhatsApp from "@mui/icons-material/WhatsApp";
import MailOutlined from "@mui/icons-material/MailOutlined";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


function Share() {
  return (
    <div className="share-content-container">
      <SideBar />
      <div className="compartir">
        
        <SearchBar />
        <div className="fondo">
          <div className="msj-compartir">
            <p>Compartir</p>
            <div className="btn-volver-container">
              <Link to="/searchResult.jsx">
                <div className="share-volver-content">
                  <span>
                    {" "}
                    <ArrowBackIosIcon /> Volver{" "}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="mensaje-final">
            <p>
              ¡Estás a punto de disfrutar de un rendimiento excepcional con el
              nuevo Moto G31! Esta actualización te ofrece una memoria RAM que
              varía de 2GB a 6GB, lo que significa un aumento significativo en
              la velocidad y la capacidad de multitarea. La memoria ROM se ha
              ampliado de 32GB a 128GB, lo que te brinda más espacio para tus
              aplicaciones y archivos. Además, la cámara principal se ha
              mejorado, pasando de 13MP a 64MP, lo que te permitirá capturar
              fotos más nítidas y detalladas. ¡Es un salto impresionante en
              rendimiento y capacidad!
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
