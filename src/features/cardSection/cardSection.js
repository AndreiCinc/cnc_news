import React, { useState, useEffect } from "react";
import sectionStyle from "./cardSection.module.scss";
import SummaryCard from "../../shared/summaryCard/summaryCard";
import axios from "axios";
import { STOCK_API } from "../../config/apiConstants";

const CardSection = () => {
    const [stockData, setStockData] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(0);

    useEffect(() => {
        axios
        .get(`${STOCK_API}/stock`)
        .then(res => setStockData(res.data))
    }, [])

    const handleSelectedCompany = (index) => {
        setSelectedCompany(index);
    };

    return(
            <div id={sectionStyle.section}>
                {stockData?.map((card, index) => 
                    <SummaryCard 
                        className={sectionStyle.selected}
                        data={card} 
                        index={index} 
                        key={index} 
                        handleSelectedCompany={handleSelectedCompany}
                        isSelected={selectedCompany === index}
                    />
                )}
            </div>
        )
}

export default CardSection;