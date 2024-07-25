import "../Styles/Monitor.css"
import PropTypes from "prop-types";

function Monitor(props){

    let displayLeftSide = "none";
    let displayRightSide = "none";

    if(0 < props.degreeAngle < 90){
        displayLeftSide = "block";
    }
    else if(-90 < props.degreeAngle < 0){
        displayRightSide = "block";
    }

    return(
        <>

        <div className="monitorDiv" style= {{ transform: `rotate3d(0, 1, 0, ${props.degreeAngle}deg)`, marginLeft: `${props.marginLeft}px` }}>
            <div className="monitorFrame">
                <div className="monitorScreen">
                    <embed src={props.imagePath} className="pdf" onClick={()=>{
                        window.open(props.link, "_blank");
                    }} />
                </div>
            </div>
            <div id="monitorFrameSideLeft" className="monitorFrameSide" style= {{ transform: `rotate3d(0, 1, 0, ${props.degreeAngle + 90}deg)`, display: `${displayLeftSide}`}}></div>
            <div id="monitorFrameSideRight" className="monitorFrameSide" style= {{ transform: `rotate3d(0, 1, 0, ${props.degreeAngle + 90}deg)`, display: `${displayRightSide}` }}></div>
            <div className="monitorStand"></div>
            <div className="monitorPlatform"></div>
        </div>

        </>
    )
}

Monitor.propTypes = {
    degreeAngle: PropTypes.number.isRequired,
    marginLeft: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default Monitor;