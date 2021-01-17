import React from "react";
import ReactDOM from "react-dom";
import Cloud1 from '../../../assets/Cloud 1.png';
import Cloud2 from '../../../assets/Cloud 2.png';
import Cloud3 from '../../../assets/Cloud 3.png';
import './clouds.css'

function Clouds() {
    let srcCloud1 = {Cloud1};
    let srcCloud2 = {Cloud2};
    let srcCloud3 = {Cloud3};

    function randomizeCloud(e) {
        let randomCloud = Math.ceil((Math.random() * (3 - 0)));
        let randomCloudSize = Math.ceil((Math.random() * (3 - 0)));
        let randomSizeStyle = "width:".concat(`${randomCloudSize * 100}px`);
        console.log(randomCloud)

        let parent = document.getElementsByClassName(e.target.className);
        switch(randomCloud){
            case 1:
                parent[0].src = srcCloud1['Cloud1']
                parent[0].setAttribute("style", `${randomSizeStyle}`)
                break;
            case 2:
                parent[0].src = srcCloud2['Cloud2']
                parent[0].setAttribute("style", `${randomSizeStyle}`)
                break;
            case 3:
                parent[0].src = srcCloud3['Cloud3']
                parent[0].setAttribute("style", `${randomSizeStyle}`)
                break;
            default:
                break;
        }
    }

    return (
        
        <div className="clouds">
            <img className="cloud1" onAnimationIterationCapture={randomizeCloud} src={Cloud1} alt=""/>
            <img className="cloud2" onAnimationIterationCapture={randomizeCloud} src={Cloud2} alt=""/>
            <img className="cloud3" onAnimationIterationCapture={randomizeCloud} src={Cloud3} alt=""/>
            <img className="cloud4" onAnimationIterationCapture={randomizeCloud} src={Cloud3} alt=""/>
            <img className="cloud5" onAnimationIterationCapture={randomizeCloud} src={Cloud3} alt=""/>
        </div>
    );
}

export default Clouds;