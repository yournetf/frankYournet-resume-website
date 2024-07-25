import React from "react";
import "../Styles/Home.css";
import DeskChair from "../Components/DeskChair";
import Desk from "../Components/Desk";
import Monitor from "../Components/Monitor";

function Home(){

    return(
        <>
            <div className="home-page">
                <div className="desk-scene-container">

                    
                    

                    <div className="me">
                        <div className="head"></div>
                    </div>

                    <div className="setup-container">
                    <div className="welcomeDiv">
                        <p>Hello, I'm Frank Yournet, feel free to explore my portfolio!</p>
                    </div>
                        <DeskChair></DeskChair>
                        <Desk></Desk>
                        <Monitor degreeAngle={45} marginLeft={0} imagePath="src\assets\GithubPicture.png" link="https://github.com/yournetf"></Monitor>
                        <Monitor degreeAngle={0} marginLeft={120} imagePath="src\assets\codePicture.png" link="src\assets\Frank Yournet's Resume-1.png"></Monitor>
                        <Monitor degreeAngle={135} marginLeft={240} imagePath="src\assets\linkedInPicture.png" link=""></Monitor>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Home;