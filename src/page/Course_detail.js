import React from "react";
import Course from "../components/Course/Course";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Course_detail()
{
    return(
        <div className="backpass">
            <Navbar/>
            <Course/>
            <Footer/>
        </div>


    )
}