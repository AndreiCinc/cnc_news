import React from "react";
import buttonStyle from "./menuButton.module.scss";

const MenuButton = () => (
    <button id="menu-button" className={buttonStyle.menuButton}>
        <img className={buttonStyle.buttonImg} src="3-linii.png" alt="#"/>
    </button>
)

export default MenuButton;