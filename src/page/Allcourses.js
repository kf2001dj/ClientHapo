import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import Body_all from "../components/Body_All/Body_all";

function Allcourses(){
   

    return(
        <div className="backcolo-dev">
            <Navbar/>
                <Body_all/>
            
            <Footer/>
        </div>
    )
}
export default Allcourses;
