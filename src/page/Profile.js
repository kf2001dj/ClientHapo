import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Body_Profile from "../components/Profile/Body_Profile";

import Footer from "../components/Footer/Footer";

function Profile(){
    return(
        <div className="backcolo">
            <Navbar/>
            <Body_Profile/>
            <Footer/>
        </div>  
    );
}
export default Profile;