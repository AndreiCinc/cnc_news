import React from "react";
import ABStyle from "./addButton.module.scss";

//using another .png until I get the add one
const AddButton = () => (
    <button className={ABStyle.addButton}>
        <img id="add-picture" src="ceas.png" alt="#" className={ABStyle.addImg}/>
    </button>
)

export default AddButton;