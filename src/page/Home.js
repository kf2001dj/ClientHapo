import React from "react";
import Body from "../components/Body/Body";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <div className="backcolo-all">
      <Navbar></Navbar>
      <Body />
      <Footer></Footer>
    </div>
  );
}
