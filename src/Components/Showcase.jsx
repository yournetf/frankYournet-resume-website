import PropTypes from "prop-types";
import "../Styles/Showcase.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";

function Showcase(props){

    const [activeVideoIndex, setActiveVideoIndex] = useState(0);

    function handleVideoSwitch(e){
        if(e.currentTarget.id === 'leftArrow'){
            if(activeVideoIndex === 0) setActiveVideoIndex(props.arrayPaths.length);
            else setActiveVideoIndex(activeVideoIndex - 1);
        }
        else if(e.currentTarget.id ==='rightArrow'){
            if(activeVideoIndex === props.arrayPaths.length-1) setActiveVideoIndex(0);
            else setActiveVideoIndex(activeVideoIndex + 1);
        }
    }

    return(
        <>
            <div className="showcaseDiv">
                <button id="leftArrow" className="arrowButton" onClick={handleVideoSwitch}><BiSolidLeftArrow /></button>
                <div className="videoDiv">
                    <video className="showcaseVideo" src={props.arrayPaths[activeVideoIndex]} controls autoPlay loop muted></video>
                </div>
                <button id="rightArrow" className="arrowButton" onClick={handleVideoSwitch}><BiSolidRightArrow /></button>
            </div>
        </>
    )
}
Showcase.propTypes = {
    arrayNames: PropTypes.array.isRequired,
    arrayPaths: PropTypes.array.isRequired
};

export default Showcase;