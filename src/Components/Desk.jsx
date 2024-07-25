import "../Styles/Desk.css";
import { useRef } from "react";
import { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

function Desk(){

    const deskBlock = useRef(null);

    const [deskHeight, setDeskHeight] = useState('29.0');


    function handleDeskAdjust(e){
        if(e.target.id === 'upArrow'){
            console.log('works');
            deskBlock.current.style.top = '-100px';
        }
        if(e.target.id === 'downArrow'){
            deskBlock.current.style.top = '500px'
        }
    }

    return(
        <>
            <div className="desk">
                <div className="desktop"></div>
                <div ref={deskBlock} className="desk-block">
                    <div className="desk-counter"></div>
                    <div className="desk-front">
                        <div className="desk-drawer"></div>
                         <div className="desk-buttons-container">
                            <button id="upArrow" onClick={handleDeskAdjust}><TiArrowSortedUp /></button>
                            <button id="downArrow" onClick={handleDeskAdjust}><TiArrowSortedDown /></button> 
                            <p id="desk-height">{deskHeight}</p>  
                        </div>
                    </div>
                </div>
                <div id="desk-leg-left" className="desk-leg">
                    <div className="desk-leg-base"></div>
                    <div className="desk-big-extender"></div>
                    <div className="desk-small-extender"></div>
                </div>
                <div id="desk-leg-right" className="desk-leg">
                    <div className="desk-leg-base"></div>
                    <div className="desk-big-extender"></div>
                    <div className="desk-small-extender"></div>
                </div>
            </div>
        </>
    )
}
export default Desk;