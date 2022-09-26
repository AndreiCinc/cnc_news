import React, { useEffect, useState } from "react";
import cardStyle from "./summaryCard.module.scss";
import classNames from "classnames";
import { addCommas } from "../helperFunctions";
import { useMediaQuery } from "react-responsive";


const SummaryCard = ({data, index, handleSelectedCompany, isSelected})=> {
    const { name, volume, open, close} = data;
    const [difference, setDifference] = useState(0);

    const startsTablet = useMediaQuery({query: '(max-width: 850px)'});
    const startsMobile = useMediaQuery({query: '(max-width: 412px)'});

    useEffect(() => {
        let diff = close - open; //random formula
        setDifference(diff.toFixed(2));
    }, [open, close]);

    let valueColor = classNames({
        [cardStyle.red]: difference < 0,
        [cardStyle.green]: difference >= 0,
    });

    let cardOverflow = classNames({
        [cardStyle.selected]: isSelected
    });

    return(
            <>
                <div className={`${cardStyle.cardComponent} ${cardOverflow}`} key={index} onClick={() => handleSelectedCompany(index)}>
                    <div className={cardStyle.body}>
                        <div className={cardStyle.mainInfo}>
                            <h3 className={cardStyle.title}>{name}</h3>
                            <p className={cardStyle.marketCap}>{addCommas(volume)}</p>
                        </div>
                        <div className={cardStyle.percentBox}>
                            <p className={`${cardStyle.percentValue} ${valueColor}`}>{`${difference > 0 ? "+" : ""}${difference}%`}</p>
                        </div>
                    </div>
                    {/* <hr className={cardStyle.dividingLine}/> */}
                </div>
            </>
        )
}

export default SummaryCard;