import React from "react";
import "./upgradeForm.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const customButtonStyle1 = {
  width: "200px",
  height: "56px",
  backgroundColor: "#002043",
  padding: "8px 16px",
  borderRadius: "16px",
  border: "1px solid #111",
  color: "whitesmoke",
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "0.2px",
};
const customButtonStyle2 = {
  width: "180px",
  height: "56px",
  backgroundColor: "#111111",
  padding: "8px 16px",
  borderRadius: "16px",
  marginLeft: "12px",
  border: "1px solid #111",
  color: "whitesmoke",
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "0.2px",
};

function UpgradeForm() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/share");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <form className="form">
      <div className="form-group">
        <h3>Registrar Upgrade</h3>
        <div className="inputs-container">
          <input
            className="input-upgrade"
            type="text"
            name="clientName"
            placeholder="Numero de Registro o Caso"
          />
        </div>
        <div>
          <input
            type="text"
            className="input-upgrade"
            name="clientName"
            placeholder="Nombre de cliente"
          />
        </div>
        <div>
          <input
            className="input-upgrade"
            type="text"
            placeholder="Producto que entra por garantia (IMEI) *"
          />
        </div>
        <div>
          <input
            className="input-upgrade"
            type="text"
            placeholder="Nombre Cliente *"
          />
        </div>
        <div className="form-buttons">
          <Button
            style={customButtonStyle1}
            variant="contained"
            onClick={handleSubmit}
          >
            Finalizar Upgrade
          </Button>
          <Button
            style={customButtonStyle2}
            variant="contained"
            onClick={handleCancel}
          >
            Cancelar{" "}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default UpgradeForm;
