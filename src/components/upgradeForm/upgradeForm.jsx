import React from "react";
import "./upgradeForm.css";

function UpgradeForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form">
      <div className="form-group">
        <h3>Registrar Upgrade</h3>
        <div>
          <input
            type="text"
            name="caseNumber"
            placeholder="Numero de Registro o Caso"
          />
        </div>
        <div>
          <input
            type="text"
            name="clientName"
            placeholder="Nombre de cliente"
          />
        </div>
        <div>
          <input
            type="text"
            name="imei1"
            placeholder="Producto que entra por garantia (IMEI)"
          />
        </div>
        <div>
          <input
            type="text"
            name="imei2"
            placeholder="Nombre de cliente"
          />
        </div>
        <button onClick={handleSubmit} type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default UpgradeForm;
