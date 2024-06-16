import React from "react";
import HomePageHighlight from "../HomePageHighlight/HomePageHighlight";
import HomePageContent from "../HomePageContent/HomePageContent";
import Footer from "../Footer/Footer";
import Introduction from "../Introduction/Introduction";
import UserHeader from "../UserHeader/UserHeader";

function UserHome(){
    return (
        <div>
            <UserHeader />
            <HomePageHighlight />
            <Introduction/>
            <HomePageContent />
            <Footer />
        </div>
    );
}

export default UserHome;