import React from "react";

import Cloud1 from '../../../assets/Cloud 1.png';
import './clouds.css'

function Clouds() {
    return (
        <div className="clouds">
            <img className="cloud1" src={Cloud1} alt=""/>
            <img className="cloud2" src={Cloud1} alt=""/>
            <img className="cloud3" src={Cloud1} alt=""/>
        </div>
    );
}

export default Clouds;