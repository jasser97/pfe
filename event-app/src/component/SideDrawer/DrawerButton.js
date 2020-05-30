import React from "react";
import "./DrawerButton.css";
const DrawerButton = props => (
  <button className="Toogle-Button" onClick={props.click}>
    <div className="Button-ligne" />
    <div className="Button-ligne" />
    <div className="Button-ligne" />
  </button>
);
export default DrawerButton;
