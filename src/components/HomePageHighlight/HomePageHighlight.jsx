import React from "react";
import Universityimage from "../../static/University-image.png";
import Universitypillar from "../../static/University-pillar.png";
import "./HomePageHighlight.css";

function HomePageHighlight() {
    return (
        <div>
            <div className="HomePageHighlightContainer">
                <div className="ImageContainer">
                    <img src={Universityimage} alt="University Image" />
                </div>
                <div className="ImageContainer">
                    <img src={Universitypillar} alt="University Pillar" />
                </div>
            </div>
            <div className="HomePageHighlightNews">
                <div className="newsTicker">
                    <p>#The text box contain the information or news about the course. </p>
                    <p>#The text box contain the information or news about the course. </p>
                    <p>#The text box contain the information or news about the course. </p>
                </div>
            </div>
        </div>
    );
}

export default HomePageHighlight;
