
import React from "react";
import Button from "@mui/material/Button";

const customButtonStyle = {
    width: "300px", 
    height: "56px",
    backgroundColor: "#002043",
    padding: "8px 16px",
    borderRadius: "16px",
    marginLeft: "17px",
    border: "1px solid #111",
    color: "whitesmoke",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "0.2px",
};

function MyCustomButton({ onClick }) {
  return (
    <Button
      style={customButtonStyle}
      variant="contained"
      onClick={onClick} 
    >
     Seleccionar
    </Button>
  );
}

export default MyCustomButton;

