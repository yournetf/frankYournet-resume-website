import "../Styles/DeskChair.css"
import { useState } from "react";

function DeskChair(){
    const [chairAnimationStatus, setChairAnimationStatus] = useState("chair");

    function handleLegsClick(){
        if(chairAnimationStatus === "chair"){
            setChairAnimationStatus("chair-animated");
        }
        else{
            setChairAnimationStatus("chair");
        }
    }
    return(
        <>
            <div id="chair" className={chairAnimationStatus}>
                            <div className="chair-head"></div>
                            <div className="chair-wing-left"></div>
                            <div className="chair-wing-right"></div>
                            <div className="chair-body"></div>
                            <div id="chair-arm-left" className="chair-arm"></div>
                            <div id="arm-rest-left" className="arm-rest"></div>
                            <div id="chair-arm-right" className="chair-arm"></div>
                            <div id="arm-rest-right" className="arm-rest"></div>
                            <div className="chair-cylinder">
                                <div className="little-cylinder"></div>
                                <div className="medium-cylinder"></div>
                                <div className="big-cylinder"></div>
                            </div>
                            <div className="chair-legs">
                                <div id="chair-leg-long-left" className="chair-leg-long">
                                    <div id="chair-leg-long-wheel-left" className="chair-leg-long-wheel"></div>
                                </div>
                                <div id="chair-leg-long-right" className="chair-leg-long">
                                    <div id="chair-leg-long-wheel-right" className="chair-leg-long-wheel"></div>
                                </div>
                            </div>
                    </div>
        </>
    )
}
export default DeskChair;