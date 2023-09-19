import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Course from "../components/Course/Course";

export default function Courses() {
  return (
    <div className="backcolo-all">
      <Navbar></Navbar>
      <Course></Course>
      <Footer></Footer>
    </div>
  );
}
