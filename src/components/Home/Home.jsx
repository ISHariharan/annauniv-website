import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import HomePageHighlight from "../HomePageHighlight/HomePageHighlight";
import Introduction from "../Introduction/Introduction";
import HomePageContent from "../HomePageContent/HomePageContent";
import Footer from "../Footer/Footer";

function Home(){
    return(
        <div className="HomeContainer">
            <Header />
            <HomePageHighlight />
            <Introduction/>
            <HomePageContent />
            <Footer />
        </div>
    );
}

export default Home;