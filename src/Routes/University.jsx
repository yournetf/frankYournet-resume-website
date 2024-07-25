import { useState } from "react";
import Showcase from "../Components/Showcase.jsx";
import { universityVideoPaths } from "../DataFiles/UniversityPageData.js";
import { universityVideoNames } from "../DataFiles/UniversityPageData.js";
import "../Styles/University.css";
import MovieChair from "../Components/MovieChair.jsx";

function University(){

    return(
    <>
        <Showcase arrayNames={universityVideoNames} arrayPaths={universityVideoPaths}></Showcase>
        <div className="chairSection">
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
            <MovieChair/>
        </div>
    </>
    )
}


export default University;