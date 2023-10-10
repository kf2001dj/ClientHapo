import { useState, useEffect } from "react";

import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [selectedNavOption, setSelectedNavOption] = useState("");

  useEffect(() => {
    // Get the current URL path
    const path = window.location.pathname;

    // Determine the selected navigation option based on the path
    if (path === "/") {
      setSelectedNavOption("home");
    } else if (path === "/allcourses" || path.startsWith("/course/")) {
      setSelectedNavOption("all");
    } else if (path === "/loginregister") {
      setSelectedNavOption("login");
    } else if (path === "/profile") {
      setSelectedNavOption("pro");
    } else if (path === "/signup") {
      setSelectedNavOption("login");
    } else if (path === "/resetpassword") {
      setSelectedNavOption("login");
    }
  }, []);

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch("http://localhost:5000/signin/status", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        });
        if (response.ok) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("Không tìm thấy mã Token, người dùng không được xác thực.");
        return;
      }

      const response = await fetch("http://localhost:5000/signout", {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`, // Gửi token trong header để xác thực
        },
      });
      if (response.status === 200) {
        console.log("Đăng xuất thành công !!!!");
        setLoggedIn(false);

        localStorage.removeItem("token"); //xoá token và userId khỏi localStorage
        localStorage.removeItem("userId");
        window.location.href = "/";
      } else {
        console.log("Đăng xuất không thành !!!!");
      }
    } catch (error) {
      console.error(error);
      console.log("Lỗi !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="./image/Hapo_Learn.png"
            className="imgNavhapo"
            alt="logo"
          ></img>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-4 mb-lg-0">
            <div className="fontVien"></div>
          </ul>
          <form className="d-flex bg-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-right">
              <li className="nav-item">
                <div
                  className={`nav-link ${
                    selectedNavOption === "home" ? "" : ""
                  }`}
                >
                  <a
                    className="nav-link active"
                    aria-current="page"
                    type="button"
                    href="/"
                  >
                    HOME
                  </a>
                </div>
              </li>
              <li className="nav-item ">
                <div
                  className={`nav-link ${
                    selectedNavOption === "all" ? "selected" : ""
                  }`}
                >
                  <a className="nav-link" type="button" href="/allcourses">
                    ALL COURSES
                  </a>
                </div>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <div className="nav-link">
                    <div
                      className="nav-link"
                      type="button"
                      onClick={handleSignOut}
                    >
                      LOGOUT
                    </div>
                  </div>
                ) : (
                  <div
                    className={`nav-link ${
                      selectedNavOption === "login" ? "selected" : ""
                    }`}
                  >
                    <a className="nav-link" type="button" href="/loginregister">
                      LOGIN/REGISTER
                    </a>
                  </div>
                )}
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <div
                    className={`nav-link ${
                      selectedNavOption === "pro" ? "selected" : ""
                    }`}
                  >
                    <a className="nav-link" type="button" href="/profile">
                      PROFILE
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </li>
            </ul>
            {selectedNavOption === "home" && (
              <div className="btn-blue-navhome ">
                <a href="/">
                  <p>HOME</p>
                </a>
              </div>
            )}
            {selectedNavOption === "all" && (
              <div className="btn-blue-navall">
                <a href="/allcourses">
                  <p>ALL COURSES</p>
                </a>
              </div>
            )}
            {isLoggedIn ? (
              <>
                {selectedNavOption === "login" && (
                  <div className="btn-blue-navlog ">
                    <div>
                      <p>LOGOUT</p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {selectedNavOption === "login" && (
                  <div className="btn-blue-navlog ">
                    <a href="/loginregister">
                      <p>LOGIN/REGISTER</p>
                    </a>
                  </div>
                )}
              </>
            )}
            {isLoggedIn ? (
              <>
                {selectedNavOption === "pro" && (
                  <div className="btn-blue-navpro">
                    <a href="/profile">
                      <p>PROFILE</p>
                    </a>
                  </div>
                )}
              </>
            ) : (
              <>{/* ẩn profile khi đăng xuất */}</>
            )}
          </form>
          <div className="fontVien2"></div>
        </div>
      </div>
    </nav>
  );
}
