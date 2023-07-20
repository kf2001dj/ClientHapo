import React from "react";
import Navbar from "../components/Navbar/Navbar";

import Login_register from "../components/Body_Login/Login_register";

import Footer from "../components/Footer/Footer";


function Login_Register(){
    return(
        <div className="backcolo">
            <Navbar/>
            <Login_register/>  

            <Footer/>
        </div>
    )
}
export default Login_Register;