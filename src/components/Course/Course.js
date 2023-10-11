import React, { useState, useEffect } from "react";
import "../Course/Course.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

export default function Course({ courses }) {
  const [selectedOption, setSelectedOption] = useState("lessons");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    handleOptionClick("lessons");
  }, []);

  const { id } = useParams();
  const courseId = parseInt(id);
  const [course, setCourseData] = useState(null);
  const [, setUserId] = useState("");
  const [userIdExists, setUserIdExists] = useState(false); // Ban đầu cho rằng userId tồn tại

  // const [message, setMessage] = useState("");

  //handle course
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/all/courses/${courseId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data from the API");
        }
        const data = await response.json();
        setCourseData(data);
        console.log("Course Id :" + courseId);
      } catch (error) {
        console.error(error);
        setCourseData(null);
      }
    };
    fetchCourseData();
  }, [courseId]);

  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log("token : " + token);
    if (token) {
      const userId = localStorage.getItem("userId");
      // console.log("User ID từ localStorage:", userId);
      // Kiểm tra xem userId có tồn tại hay không
      if (userId) {
        setUserId(userId);
      } else {
        // Nếu userId không tồn tại, bạn có thể gửi yêu cầu đến máy chủ để lấy userId
        const getUserId = async () => {
          try {
            const response = await fetch(
              "http://localhost:5000/signin/status",
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            if (!response.ok) {
              throw new Error("Failed to get user ID");
            }
            const userData = await response.json();
            setUserId(userData.userId);
          } catch (error) {
            console.error(error);
          }
        };
        getUserId();
      }
    } else {
      // Nếu không có token trong localStorage, userId sẽ được đặt là null
      setUserId(null);
    }
  }, []);

  const handleJoinCourse = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("Vui lòng đăng nhập để tham gia khóa học :)) ");
      setUserIdExists(true);

      // Đặt hẹn giờ để ẩn thông báo sau 1,5s giây
      setTimeout(() => {
        setUserIdExists(false);
        window.location.href = "/loginregister";
      }, 1500);
      return;
    }

    const requestBody = {
      userId: parseInt(userId),
      courseId: courseId,
    };

    try {
      const response = await fetch("http://localhost:5000/all/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        // Thêm khóa học thành công
        console.log("Khóa học đã được thêm thành công!");

        // Hiển thị thông báo cho người dùng
        alert("Khóa học đã được thêm thành công!");

        setUserId(userId);
      } else if (response.status === 400) {
        // Khóa học đã tồn tại cho người dùng
        console.log("Khóa học đã tồn tại !!! ");

        // Hiển thị thông báo lỗi cho người dùng
        alert("Khóa học đã tồn tại !!!");
      } else {
        console.log(
          "Thêm khóa học không thành công. Response status: " + response.status
        );
      }
      console.log("Request Body ", requestBody);
    } catch (error) {
      console.error(error);
    }
  };

  if (!course) {
    return null;
  }

  return (
    <div className="backcolo-all">
      <Navbar></Navbar>
      <div className="body-course">
        <div className="head-page-course">
          <a href="/">
            Home
            <div className="btn-nexthome"> &gt; </div>
          </a>

          <a href="/allcourses" className="next-allcourse">
            All courses
            <div className="btn-nextall"> &gt; </div>
          </a>

          <a href="/review" className="next-course">
            Course detail
            <div className="btn-nextcourse"> &gt; </div>
          </a>

          <a href="/lesson" className="next-detail">
            Lesson detail
          </a>
        </div>

        <div className="body-page-course" key={course.id}>
          <div className="row body-page-head">
            <div className="col-8">
              <div className="imgpage-html">
                <img src={course.logo} alt="logo" className="img-html-body" />
              </div>
            </div>
            <div className="col-4">
              <div className="des-cours">
                <p className="txtdes-cours">Descriptions course</p>
                <div className="btndes-cours"></div>
                <p className="txtlearn-des">
                  Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                  erat dignissim. Sed quis rutrum tellus, sit amet viverra
                  felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam
                  nulla ipsum, venenatis malesuada felis quis, ultricies
                  convallis neque. Pellentesque tristique fringilla tempus.
                  Vivamus bibendum nibh in dolor pharetra, a euismod nulla
                  dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc.
                  Suspendisse eu ante pretium, consectetur leo at, congue quam.
                  Nullam hendrerit porta ante vitae tristique.
                </p>
              </div>
            </div>
          </div>

          <div className="row body-page-head">
            <div className="col-8">
              <div className="coures-learn-devlist">
                <span
                  type="button"
                  onClick={() => handleOptionClick("lessons")}
                  className={
                    selectedOption === "lessons" ? "selected " : "default"
                  }
                >
                  <p className="txtlesson-cour">Lessons</p>
                </span>
                <Link
                  to={`/teacher/${courseId}`}
                  type="button"
                  onClick={() => handleOptionClick("teacher")}
                  className={
                    selectedOption === "teacher" ? "selected " : "default"
                  }
                >
                  <p className="txtlesson-cour-tea">Teacher</p>
                </Link>
                <Link
                  to={`/review/${courseId}`}
                  type="button"
                  onClick={() => handleOptionClick("reviews")}
                  className={
                    selectedOption === "reviews" ? "selected " : "default"
                  }
                >
                  <p className="txtlesson-cour-rev">Reviews</p>
                </Link>

                {selectedOption === "lessons" && (
                  <>
                    <div className="but-cour-dev1"></div>
                    <div className="but-lesson-blu"></div>

                    <div className="in-search-dev">
                      <input
                        className="ip-list-dev"
                        placeholder="Search..."
                      ></input>
                      <img
                        src="../image/klup.png"
                        alt="klup"
                        className="ip-note-lup-dev"
                      ></img>
                      <button className="btn-search-dev">
                        <p className="txt-search-dev">Tìm kiếm</p>
                      </button>
                      {userIdExists && !localStorage.getItem("userId") && (
                        <p className="codeErro">
                          Vui lòng đăng nhập để thêm khoá học vào tài khoản :))
                        </p>
                      )}
                      <span
                        type="button"
                        className="btn-slot-dev"
                        onClick={handleJoinCourse}
                      >
                        <p className="txt-slot-dev">Tham gia khoá học</p>
                        {/* <p>{message}</p> */}
                      </span>
                    </div>

                    <div>
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">1.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>

                    <div className="list-oth2">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">2.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>

                    <div className="list-oth3">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">3.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth2">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">4.</p>
                      <p className="oht-txtlist1-dev4">
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                        Aenean egestas magna at porttitor vehicula. Nullam augue
                        augue.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn4">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth5">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">5.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth5">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">6.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth2">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">7.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth5">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">8.</p>
                      <p className="oht-txtlist1-dev4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean egestas magna at porttitor vehicula. Nullam augue
                        augue.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn4">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth5">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">9.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth2">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">10.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth5">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">11.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth2">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">12.</p>
                      <p className="oht-txtlist1-dev4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean egestas magna at porttitor vehicula. Nullam augue
                        augue.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn4">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth2">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">13.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth2">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">14.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth5">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">15.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth2">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">16.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth5">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">17.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth2">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">18.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth5">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">19.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth2">
                      <div className="but-list-font"></div>
                      <p className="oth-solist-dev1">20.</p>
                      <p className="oht-txtlist1-dev1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <a href="/" type="button" className="bt-oth-learn">
                        <p>Learn</p>
                      </a>
                    </div>
                    <div className="list-oth20">
                      <div className="but-list-font"></div>
                    </div>

                    <div className="list-dev-page">
                      <div className="row">
                        <div className="col-md-12 cour-list-page">
                          <ul className="pagination">
                            <li className="page-item previous">
                              <a
                                className="page-link  right-courlearn"
                                href="##"
                                aria-label="Previous"
                              >
                                <img
                                  src="../image/left-mt.png"
                                  alt="mutienleft"
                                ></img>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="##">
                                <p>1</p>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="##">
                                <p>2</p>
                              </a>
                            </li>
                            <li className="page-item ">
                              <a className="page-link" href="##">
                                <p>3</p>
                              </a>
                            </li>
                            <li className="page-item next">
                              <a
                                className="page-link right-courlearn"
                                href="##"
                                aria-label="Next"
                              >
                                <img
                                  src="../image/right-mtall.png"
                                  alt="muitenright"
                                ></img>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {selectedOption === "teacher" && (
                  <>
                    <div className="but-cour-dev1"></div>
                    <div className="but-teach-blu"></div>
                  </>
                )}

                {selectedOption === "reviews" && (
                  <>
                    <div className="but-cour-dev1"></div>
                    <div className="but-rew-blu"></div>
                  </>
                )}
              </div>
            </div>
            <div className="col-4">
              <div className="des-cours-gr">
                <img src="../image/3hs.png" alt="3hs"></img>
                <p className="txt3hs">Learners</p>
                <p className="txtlearn-cour"> : </p>
                <p className="solearn-cour">500</p>
                <div className="btn-courn-solearn"></div>
                <div className="magin-cours-one">
                  <img src="../image/bang.png" alt="bang"></img>
                  <p className="txt3hs">Lessons</p>
                  <p className="txtlearn-cour"> : </p>
                  <p className="solearn-cour">100 lesson</p>
                  <div className="btn-courn-solearn"></div>
                </div>
                <div className="magin-cours-one">
                  <img src="../image/dho.png" alt="dho"></img>
                  <p className="txt3hs">Times</p>
                  <p className="txtlearn-cour"> : </p>
                  <p className="solearn-cour">80 hours</p>
                  <div className="btn-courn-solearn"></div>
                </div>
                <div className="magin-cours-one">
                  <img src="../image/key.png" alt="key"></img>
                  <p className="txt3hs">Learners</p>
                  <p className="txtlearn-cour"> : </p>
                  <p className="solearn-cour-code">#learn,#code</p>
                  <div className="btn-courn-solearn"></div>
                </div>
                <div className="magin-cours-one">
                  <img src="../image/1do.png" alt="1do"></img>
                  <p className="txt3hs">Learners</p>
                  <p className="txtlearn-cour"> : </p>
                  <p className="solearn-cour">Free</p>
                </div>
              </div>

              <div className="des-cours-list">
                <div className="cours-oth">
                  <p className="txtcours-oth">Other Courses</p>
                </div>
                <div className="cours-oth-list">
                  <p className="oth-solist">1.</p>
                  <p className="oht-txtlist">
                    Lorem ipsum dolor sit amet, consectetur the adipiscing elit.
                  </p>
                  <div className="btn-oth-list"></div>
                </div>
                <div className="cours-oth-list">
                  <p className="oth-solist">2.</p>
                  <p className="oht-txtlist">
                    Lorem ipsum dolor sit amet, consectetur the adipiscing elit.
                  </p>
                  <div className="btn-oth-list2"></div>
                </div>
                <div className="cours-oth-list">
                  <p className="oth-solist">3.</p>
                  <p className="oht-txtlist">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                  <div className="btn-oth-list3"></div>
                </div>
                <div className="cours-oth-list">
                  <p className="oth-solist">4.</p>
                  <p className="oht-txtlist">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                  <div className="btn-oth-list3"></div>
                </div>
                <div className="cours-oth-list">
                  <p className="oth-solist">5.</p>
                  <p className="oht-txtlist">
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                  <div className="btn-oth-list3"></div>
                </div>

                <div className="cours-oth-list">
                  <a href="/" type="button" className="btn-oth-foot">
                    <p className="oth-viewtxt">View all ours courses</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
