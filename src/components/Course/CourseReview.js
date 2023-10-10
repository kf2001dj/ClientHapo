import React, { useState, useEffect } from "react";
import "../Course/CourseReview.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { useParams } from "react-router-dom";
export default function CourseReview() {
  const [selectedOption, setSelectedOption] = useState("reviews");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const [isVisibleShow, setIsVisibleShow] = useState(false);
  const toggleshowVisibility = () => {
    setIsVisibleShow(!isVisibleShow);
  };

  const { id } = useParams();
  const courseId = parseInt(id);
  const [course, setCourseData] = useState(null);
  const [, setUserId] = useState("");
  // const [userIdExists, setUserIdExists] = useState(false);
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

  const handleRemoveLeaveCourse = async (courseId) => {
    const userId = localStorage.getItem("userId");
    const courseIdNumber = parseInt(courseId); // Đảm bảo courseId là số nguyên
    const userIdNumber = parseInt(userId); // Đảm bảo userId là số nguyên
    console.log(userId);
    if (!userId) {
      // Xử lý logic khi userId không khả dụng (ví dụ: chuyển hướng đến trang đăng nhập)
      return;
    }

    const cleanRequestBody = {
      userId: userIdNumber,
      courseId: courseIdNumber,
    };
    try {
      // Loại bỏ các thuộc tính không cần thiết hoặc không thể chuyển đổi thành JSON

      const response = await fetch("http://localhost:5000/all/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(cleanRequestBody), // Sử dụng dữ liệu đã được làm sạch
      });

      if (response.ok) {
        // Xoá khóa học thành công
        console.log("Khóa học đã được xoá thành công!");

        // Hiển thị thông báo cho người dùng
        alert("Khóa học đã được xoá thành công!");

        // Gọi một hàm hoặc thực hiện bất kỳ cập nhật nào khác cần thiết trên giao diện của bạn
      } else if (response.status === 400) {
        // Khóa học không tồn tại cho người dùng
        console.log("Khóa học không tồn tại !!! ");

        // Hiển thị thông báo lỗi cho người dùng
        alert("Khóa học không tồn tại !!!");
      } else {
        console.log(
          "Xoá khóa học không thành công. Response status: " + response.status
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!course) {
    return null;
  }
  return (
    <div className="backcolo-all">
      <Navbar />
      <div className="backcolo-dev">
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

            <a href="/course" className="next-course">
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
            </div>

            <div className="row body-page-head">
              <div className="col-8">
                <div className="coures-learn-devlist">
                  <span
                    // href="##"
                    type="button"
                    onClick={() => handleOptionClick("lessons")}
                    className={
                      selectedOption === "lessons" ? "selected " : "default"
                    }
                  >
                    <p className="txtlesson-cour">Lessons</p>
                  </span>
                  <span
                    type="button"
                    onClick={() => handleOptionClick("teacher")}
                    className={
                      selectedOption === "teacher" ? "selected " : "default"
                    }
                  >
                    <p className="txtlesson-cour-tea">Teacher</p>
                  </span>
                  <span
                    type="button"
                    onClick={() => handleOptionClick("reviews")}
                    className={
                      selectedOption === "reviews" ? "selected " : "default"
                    }
                  >
                    <p className="txtlesson-cour-rev">Reviews</p>
                  </span>

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
                          src="./image/klup.png"
                          className="ip-note-lup-dev"
                        ></img>
                        <button className="btn-search-dev">
                          <p className="txt-search-dev">Tìm kiếm</p>
                        </button>
                        <a
                          href="/lesson"
                          type="button"
                          className="btn-slot-dev"
                        >
                          <p className="txt-slot-dev">Tham gia khoá học</p>
                        </a>
                      </div>

                      <div>
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">1.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>

                      <div className="list-oth2">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">2.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>

                      <div className="list-oth3">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">3.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth2">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">4.</p>
                        <p className="oht-txtlist1-dev4">
                          Lorem ipsum dolor sit amet,consectetur adipiscing
                          elit. Aenean egestas magna at porttitor vehicula.
                          Nullam augue augue.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn4">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth5">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">5.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth5">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">6.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth2">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">7.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth5">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">8.</p>
                        <p className="oht-txtlist1-dev4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean egestas magna at porttitor vehicula.
                          Nullam augue augue.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn4">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth5">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">9.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth2">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">10.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth5">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">11.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth2">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">12.</p>
                        <p className="oht-txtlist1-dev4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean egestas magna at porttitor vehicula.
                          Nullam augue augue.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn4">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth2">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">13.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth2">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">14.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth5">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">15.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth2">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">16.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth5">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">17.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth2">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">18.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth5">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">19.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth2">
                        <div className="but-list-font"></div>
                        <p className="oth-solist-dev1">20.</p>
                        <p className="oht-txtlist1-dev1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <a href="/" type="button" className="bt-oth-learn">
                          <p>Learn</p>
                        </a>
                      </div>
                      <div className="list-oth20">
                        <div className="but-list-font"></div>
                      </div>
                      {/* so trang */}
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
                                    src="./image/left-mt.png"
                                    alt="anhloi"
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
                                    src="./image/right-mtall.png"
                                    alt="anhloi"
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
                      <p className="txtmaindev">Main Teachers</p>
                      <div className="maindev-list">
                        <img src="./image/devmain.png"></img>
                        <p className="txtdev-id">Luu Trung Nghia </p>
                        <p className="txtdev-id2">Second Year Teacher</p>
                        <img
                          src="./image/Ellipse 33.png"
                          className="img-maindev-gg"
                          alt="anhloi"
                        ></img>
                        <img
                          src="./image/Ellipse 34.png"
                          className="img-maindev-face"
                          alt="anhloi"
                        ></img>
                        <img
                          src="./image/Ellipse 35.png"
                          className="img-maindev-slack"
                          alt="anhloi"
                        ></img>

                        <img
                          src="./image/Groupdev.png"
                          className="img-maindev-g"
                          alt="anhloi"
                        ></img>
                        <img
                          src="./image/Vectorfacedev.png"
                          className="img-maindev-fa"
                          alt="anhloi"
                        ></img>
                        <img
                          src="./image/Group 84.png"
                          className="img-maindev-sl"
                          alt="anhloi"
                        ></img>

                        <p className="txtdevmain-skill">
                          Vivamus volutpat eros pulvinar velit laoreet, sit amet
                          egestas erat dignissim. Sed quis rutrum tellus, sit
                          amet viverra felis. Cras sagittis sem sit amet urna
                          feugiat rutrum. Nam nulla ipsum, venenatis malesuada
                          felis quis, ultricies convallis neque. Pellentesque
                          tristique
                        </p>
                      </div>

                      <div className="maindev-list">
                        <img src="./image/devmain.png" alt="anhloi"></img>
                        <p className="txtdev-id">Luu Trung Nghia </p>
                        <p className="txtdev-id2">Second Year Teacher</p>
                        <img
                          src="./image/Ellipse 33.png"
                          className="img-maindev-gg"
                          alt="anhloi"
                        ></img>
                        <img
                          src="./image/Ellipse 34.png"
                          className="img-maindev-face"
                          alt="anhloi"
                        ></img>
                        <img
                          src="./image/Ellipse 35.png"
                          className="img-maindev-slack"
                          alt="anhloi"
                        ></img>

                        <img
                          src="./image/Groupdev.png"
                          className="img-maindev-g"
                          alt="anhloi"
                        ></img>
                        <img
                          src="./image/Vectorfacedev.png"
                          alt="anhloi"
                          className="img-maindev-fa"
                        ></img>
                        <img
                          src="./image/Group 84.png"
                          alt="anhloi"
                          className="img-maindev-sl"
                        ></img>

                        <p className="txtdevmain-skill">
                          Vivamus volutpat eros pulvinar velit laoreet, sit amet
                          egestas erat dignissim. Sed quis rutrum tellus, sit
                          amet viverra felis. Cras sagittis sem sit amet urna
                          feugiat rutrum. Nam nulla ipsum, venenatis malesuada
                          felis quis, ultricies convallis neque. Pellentesque
                          tristique
                        </p>
                      </div>
                    </>
                  )}

                  {selectedOption === "reviews" && (
                    <>
                      <div className="but-cour-dev1"></div>
                      <div className="but-rew-blu"></div>
                      <p className="review05">05 Reviews</p>
                      <div className="review-btn"></div>
                      <img
                        src="./image/Rectangle 174.png"
                        alt="anhloi"
                        className="rv-blog"
                      ></img>
                      <p className="txtrv-blog">5</p>
                      <img
                        src="./image/start-rv.png"
                        alt="anhloi"
                        className="rv-start-dev"
                      ></img>
                      <img
                        src="./image/start-rv.png"
                        alt="anhloi"
                        className="rv-start-dev2"
                      ></img>
                      <img
                        src="./image/start-rv.png"
                        alt="anhloi"
                        className="rv-start-dev3"
                      ></img>
                      <img
                        src="./image/start-rv.png"
                        alt="anhloi"
                        className="rv-start-dev4"
                      ></img>
                      <img
                        src="./image/start-rv.png"
                        alt="anhloi"
                        className="rv-start-dev5"
                      ></img>
                      <p className="txtrating-rv">2 Ratings</p>

                      <div className="font-rvstart">
                        <p className="txtstar5-font">5 stars</p>
                        <div className="btn-star5-font"></div>
                        <p className="txtstart5-font2">2</p>
                        <div className="font-stardev">
                          <p className="txtstar5-font">4 stars</p>
                          <div className="btn-star5-font2"></div>
                          <p className="txtstart5-font2">0</p>
                        </div>
                        <div className="font-stardev">
                          <p className="txtstar5-font">3 stars</p>
                          <div className="btn-star5-font2"></div>
                          <p className="txtstart5-font2">0</p>
                        </div>
                        <div className="font-stardev">
                          <p className="txtstar5-font">2 stars</p>
                          <div className="btn-star5-font2"></div>
                          <p className="txtstart5-font2">0</p>
                        </div>
                        <div className="font-stardev">
                          <p className="txtstar5-font">1 stars</p>
                          <div className="btn-star5-font2"></div>
                          <p className="txtstart5-font2">0</p>
                        </div>
                      </div>

                      <span type="button" onClick={toggleshowVisibility}>
                        {isVisibleShow ? "" : ""}
                        <p className="txtallshowrv">
                          Show all reviews
                          <img src="./image/showall.png" alt="anhloi"></img>
                        </p>
                      </span>
                      {isVisibleShow && (
                        <div>
                          <img
                            src="./image/imgrv.png"
                            className="imgshow-rv"
                            alt="anhloi"
                          ></img>
                          <p className="txtshow-rv">Nam Hoang</p>
                          <img
                            src="./image/Group 94.png"
                            alt="anhloi"
                            className="imgrv-star"
                          ></img>
                          <p className="imgalldate-show">
                            August 4, 2020 at 1:30 pm
                          </p>
                          <p className="txtshow-cmtrv">
                            Vivamus volutpat eros pulvinar velit laoreet, sit
                            amet egestas erat dignissim. Sed quis rutrum tellus,
                            sit amet viverra felis. Cras sagittis sem sit amet
                            urna feugiat rutrum. Nam nulla ipsum, venenatis
                            malesuada felis quis, ultricies convallis neque.
                            Pellentesque tristique
                          </p>
                          <div className="showcmt2">
                            <img
                              src="./image/imgrv.png"
                              alt="anhloi"
                              className="imgshow-rv"
                            ></img>
                            <p className="txtshow-rv">Nam Hoang</p>
                            <img
                              src="./image/Group 94.png"
                              alt="anhloi"
                              className="imgrv-star"
                            ></img>
                            <p className="imgalldate-show">
                              August 4, 2020 at 1:30 pm
                            </p>
                            <p className="txtshow-cmtrv">
                              Vivamus volutpat eros pulvinar velit laoreet, sit
                              amet egestas erat dignissim. Sed quis rutrum
                              tellus, sit amet viverra felis. Cras sagittis sem
                              sit amet urna feugiat rutrum. Nam nulla ipsum,
                              venenatis malesuada felis quis, ultricies
                              convallis neque. Pellentesque tristique
                            </p>
                          </div>
                          <div className="showcmt3">
                            <img
                              src="./image/imgrv.png"
                              alt="anhloi"
                              className="imgshow-rv2"
                            ></img>
                            <p className="txtshow-rv2">Nga Nguyen</p>
                            <p className="imgalldate-show2">
                              August 4, 2020 at 1:30 pm
                            </p>
                            <p className="txtshow-cmtrv2">
                              Vivamus volutpat eros pulvinar velit laoreet, sit
                              amet egestas erat dignissim. Sed quis rutrum
                              tellus, sit amet viverra felis. Cras sagittis sem
                              sit amet urna
                            </p>
                          </div>
                        </div>
                      )}

                      <div className={isVisibleShow ? "" : ""}>
                        <div>
                          <p className="txtleav-rv">Leave a Review</p>
                          <p className="txtleav-rv-mess">Message</p>
                          <textarea className="txtmess-rvleav"></textarea>
                          <p className="txtvote">Vote</p>
                          <img
                            src="./image/Group 149.png"
                            alt="anhloi"
                            className="imggr149"
                          ></img>
                          <p className="txtstartsfoot"> (stars) </p>

                          <a href="/" type="button" className="btn-send">
                            <p className="txtsend">Send</p>
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="col-4">
                <div className="des-cours-gr-rv">
                  <img src="./image/3hs.png" alt="anhloi"></img>
                  <p className="txt3hs">Learners</p>
                  <p className="txtlearn-cour"> : </p>
                  <p className="solearn-cour">500</p>
                  <div className="btn-courn-solearn"></div>
                  <div className="magin-cours-one">
                    <img src="./image/bang.png" alt="anhloi"></img>
                    <p className="txt3hs">Lessons</p>
                    <p className="txtlearn-cour"> : </p>
                    <p className="solearn-cour">100 lesson</p>
                    <div className="btn-courn-solearn"></div>
                  </div>
                  <div className="magin-cours-one">
                    <img src="./image/dho.png" alt="anhloi"></img>
                    <p className="txt3hs">Times</p>
                    <p className="txtlearn-cour"> : </p>
                    <p className="solearn-cour">80 hours</p>
                    <div className="btn-courn-solearn"></div>
                  </div>
                  <div className="magin-cours-one">
                    <img src="./image/key.png" alt="anhloi"></img>
                    <p className="txt3hs">Learners</p>
                    <p className="txtlearn-cour"> : </p>
                    <p className="solearn-cour-code">#learn,#code</p>
                  </div>
                  <div className="btn-courn-solearn-end"></div>
                  <div className="magin-cours-one">
                    <img src="./image/1do.png" alt="anhloi"></img>
                    <p className="txt3hs">Learners</p>
                    <p className="txtlearn-cour"> : </p>
                    <p className="solearn-cour">Free</p>
                  </div>
                  <div className="btn-courn-solearn-end"></div>
                  <div>
                    {/* {userIdExists &&
                      !localStorage.getItem("userId") &&
                      alert("Hãy tham gia khoá học")} */}
                    <span
                      type="button"
                      className="btn-end-learndev"
                      onClick={handleRemoveLeaveCourse}
                    >
                      <p>Kết thúc khoá học</p>
                    </span>
                  </div>
                </div>

                <div className="des-cours-list">
                  <div className="cours-oth">
                    <p className="txtcours-oth">Other Courses</p>
                  </div>
                  <div className="cours-oth-list">
                    <p className="oth-solist">1.</p>
                    <p className="oht-txtlist">
                      Lorem ipsum dolor sit amet, consectetur the adipiscing
                      elit.
                    </p>
                    <div className="btn-oth-list"></div>
                  </div>
                  <div className="cours-oth-list">
                    <p className="oth-solist">2.</p>
                    <p className="oht-txtlist">
                      Lorem ipsum dolor sit amet, consectetur the adipiscing
                      elit.
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
        {/* <Footer></Footer> */}
      </div>
      <Footer />
    </div>
  );
}
