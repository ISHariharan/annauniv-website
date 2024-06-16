import React from "react";
import styles from "../Header/Header.css";
import { Cookies } from "react-cookie";
import Annauniversityimage from "../../static/annauniversity-logo.png";
import TamilnaduLogo from "../../static/tamilnadu-symbol.png";
var cookie = new Cookies();

function UserHeader(){
    const username = cookie.get("username");
    return (
        <div className="Header">
            <div className="HeaderContainer">
                <div className="UniversityImageContainer">
                    <img src={Annauniversityimage} alt="Anna University Image" className="University-image"/>
                </div>
                <div className="HeaderContentContainer">
                    <h1 className="UniversityName">ANNA UNIVERSITY</h1>
                    <h5>Chennai-25</h5>
                    <h2>ONLINE CERTIFICATION COURSE</h2>
                </div>
                <div>
                    <img src={TamilnaduLogo} alt="Tamil Nadu Logo Image" className="TN-symbol"/>
                </div>
            </div>
            <div className="NavBar">
                <div className="NavBarContainer">
                    <div className="NavBarContentContainer">
                        <a href="" className="NavBarLinks"><p className="NavBarContent">ADMISSIONS</p></a>
                    </div>
                    <div>
                        <a href="" className="NavBarLinks"><p className="NavBarContent">COURSES</p></a>
                    </div>
                    <div>
                        <a href="" className="NavBarLinks"><p className="NavBarContent">COLLABORATORS</p></a>
                    </div>
                    <div style={{width : "80px"}}> 
                        <a href="" className="NavBarLinks"><p className="NavBarContent">ABOUT US</p></a>
                    </div>
                    <div>
                        <a href="" className="NavBarLinks"><p className="NavBarContent">CONTACT US</p></a>
                    </div>
                </div>
                <div>
                    <button className="LoginButton">
                        {username}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserHeader;