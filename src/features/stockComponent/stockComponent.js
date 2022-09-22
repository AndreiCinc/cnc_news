import React from "react";
import CardSection from "../cardSection/cardSection";
import stockStyle from "./stockComponent.module.scss";


const Stock = () => {
    return(
        <div id={stockStyle.stock}>
            <CardSection/>
        </div>
    )
}

export default Stock;