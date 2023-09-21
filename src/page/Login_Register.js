import React from "react";

import Login_register from "../components/Body_Login/Login_register";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
function Login_Register() {
  return (
    <div className="backcolo-all">
      <Navbar></Navbar>
      <Login_register />
      <Footer></Footer>
    </div>
  );
}
export default Login_Register;
