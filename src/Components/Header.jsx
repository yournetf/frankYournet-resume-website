import React from "react";
import "../Styles/Header.css";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <>
            <div className="header-background">
                <Link to="/">
                    <button id="home-button" className="header-buttons"><Link to='/'></Link></button>
                </Link>
                <a id="phatblack-link" href="https://phat-black.web.app/" target="_blank">  
                    <button id="phatblack-button" className="header-buttons"></button>   
                </a>
                <Link to= "/University">
                    <button id="university-button" className="header-buttons"></button>
                </Link>
                <a href="https://frank-yournet-daily-trivia-daf88c18aee5.herokuapp.com/" target="_blank">
                    <button id="personal-button" className="header-buttons"></button>
                </a>
                
            </div>
        </>
    )
}

export default Header