import React from "react";
import newsStyle from "./newsComponent.module.scss";


const News = () => {
    return(
            <div id={newsStyle.news}>
                {/* <img src="theMoon.png" alt="#"/> */}
                <div className={newsStyle.textPart}>
                    <div className={newsStyle.title}>
                        Astronauts could land on the Moon by 2039
                    </div>
                    <div className={newsStyle.newsDetails}>
                        <div className={newsStyle.time}>
                            <a href="https://www.space.com/">SPACE.com &nbsp;&nbsp;&nbsp;&nbsp;</a>
                            <p>20m ago</p>
                            {/* <img className={newsStyle.clock} src="ceas.png"/> - I DON`T LIKE HOW THIS ICONS IS DISPLAYED */}
                        </div>
                        <div className={newsStyle.science}>SCIENCE</div>
                    </div>
                </div>
            </div>
        )
}

export default News;