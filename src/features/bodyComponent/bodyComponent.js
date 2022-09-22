import React from "react";
import { useMediaQuery } from "react-responsive";
import News from "../newsComponent/newsComponent";
import Stock from "../stockComponent/stockComponent";
import Weather from "../weatherComponent/weatherComponent";
import bodyStyle from "./bodyComponent.module.scss";

const BodyComponent = () => {

    const isMobileOrTablet =  useMediaQuery({query: '(min-width: 850px)'});

    return (
            <div id={bodyStyle.body}>
                <div className={bodyStyle.firstRow}>
                    {isMobileOrTablet && <News />}
                    <Weather/>
                </div>
                <div className={bodyStyle.secondRow}>
                    <Stock/>
                </div>
            </div>
        )
}

export default BodyComponent;