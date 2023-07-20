import React from "react";

import Navbar from "../components/Navbar/Navbar";

import Pass from "../components/Password/Pass";

import Footer from "../components/Footer/Footer";

export default function Password()
{
    return(
        <div className="backpass">
            <Navbar/>
            <Pass/>
            <Footer/>
        </div>


    )
}