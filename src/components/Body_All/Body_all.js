import "../Body_All/allcour.scss";

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Body_all() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  //Teacher
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };
  // số người hoc
  const [Optionsonguoi, setSonguoiOption] = useState("");
  const songuoiOptionSelect = (event) => {
    setSonguoiOption(event.target.value);
  };
  //tgianhoc
  const [Optiontime, setTimeOption] = useState("");
  const timeOptionSelect = (event) => {
    setTimeOption(event.target.value);
  };
  //sobaihoc
  const [Optionsobai, setsobaiOption] = useState("");
  const sobaiOptionSelect = (event) => {
    setsobaiOption(event.target.value);
  };

  //tags
  const [Optiontag, settagOption] = useState("");
  const tagOptionSelect = (event) => {
    settagOption(event.target.value);
  };
  //review
  const [Optionview, setviewOption] = useState("");
  const viewOptionSelect = (event) => {
    setviewOption(event.target.value);
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Không tìm thấy nạp ID khóa học");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Lỗi tìm nạp ID khóa học: ", error);
      });
  }, []);

  return (
    <div className="container body-list-learn text-center">
      <div className="filter">
        {/* Nút ấn */}
        <button onClick={toggleVisibility} className="btnfilter">
          {isVisible ? "" : ""}
          <img src="./image/filter.png"></img>
          <p className="txtFilter">Filter</p>
        </button>

        <div className="in-search">
          <input className="ip-list" placeholder="Search..."></input>
          <img src="./image/klup.png" className="ip-note-lup"></img>
          <button className="btn-search">
            <p className="txt-search">Tìm kiếm</p>
          </button>
        </div>
        {/* Phần tử cần hiển thị */}
        {isVisible && (
          <div className="list-filter-note">
            <p className="txt-list-fil">Lọc theo</p>
            <a type="button" className="btn-list-new">
              <p className="txt-list-new">Mới nhất</p>
            </a>
            <a type="button" className="btn-list-los">
              <p className="txt-list-los">Cũ nhất</p>
            </a>

            <select
              className="form-select-teacher"
              value={selectedOption}
              onChange={handleOptionSelect}
            >
              <option hidden disabled value="">
                Teacher
              </option>
              <option value="option1">Thành Đông</option>
              <option value="option2">Đông Nguyễn</option>
              <option value="option3">Anh Dương</option>
              <option value="option4">Anh Nghĩa</option>
              <option value="option5">Anh Tuấn</option>
            </select>

            <select
              className="form-select-learn"
              value={Optionsonguoi}
              onChange={songuoiOptionSelect}
            >
              <option hidden disabled value="">
                Số người học
              </option>
              <option value="option1">30 người</option>
              <option value="option2">45 người</option>
              <option value="option3">60 người</option>
            </select>

            <select
              className="form-select-time"
              value={Optiontime}
              onChange={timeOptionSelect}
            >
              <option hidden disabled value="">
                Thời gian học
              </option>
              <option value="option1">8h30-11h55</option>
              <option value="option2">12h55-17h55</option>
              <option value="option3">17h55-21h55</option>
            </select>

            <select
              className="form-select-sobai"
              value={Optionsobai}
              onChange={sobaiOptionSelect}
            >
              <option hidden disabled value="">
                Số bài học
              </option>
              <option value="option1">Tăng dần</option>
              <option value="option2">Giảm dần</option>
            </select>

            <select
              className="form-select-tag"
              value={Optiontag}
              onChange={tagOptionSelect}
            >
              <option hidden disabled value="">
                Tags
              </option>
              <option value="option1">Tăng dần</option>
              <option value="option2">Giảm dần</option>
            </select>

            <select
              className="form-select-view"
              value={Optionview}
              onChange={viewOptionSelect}
            >
              <option hidden disabled value="">
                Review
              </option>
              <option value="option1">Tăng dần</option>
              <option value="option2">Giảm dần</option>
            </select>
          </div>
        )}
        {/* Phần tử mới */}
        <div className={isVisible ? "" : ""}>
          <div className="list-learn-dev">
            {users.map((user) => (
              <div className="row custom-row-dev" key={user.id}>
                <div className="col-md-6 custom-margin-one">
                  <img src={user.image_url} alt="ảnh lỗi"></img>
                  <p className="cust-learn-html">{user.name}</p>
                  <p className="txt-learn-html">{user.about}</p>
                  <Link to={`/course/${user.id}`}>
                    <button className="bt-learn-more">
                      <p className="txtmore-dev">More</p>
                    </button>
                  </Link>

                  <div className="btn-back-learn"></div>
                  <p className="txtlearn-dev">Learners</p>
                  <p className="txtless-dev">Lessons</p>
                  <p className="txttime-dev">Times</p>
                  <p className="solearn-dev">{user.learners}</p>
                  <p className="soless-dev">{user.lessons}</p>
                  <p className="sotime-dev">{user.time} (h)</p>
                </div>
              </div>
            ))}

            <div className="list-dev-page">
              <div className="row">
                <div className="col-md-12">
                  <ul className="pagination">
                    <li className="page-item previous">
                      <a className="page-link" href="" aria-label="Previous">
                        <img src="./image/left-mt.png"></img>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <p>1</p>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <p>2</p>
                      </a>
                    </li>
                    <li className="page-item ">
                      <a className="page-link" href="#">
                        <p>3</p>
                      </a>
                    </li>
                    <li className="page-item next">
                      <a className="page-link" href="#" aria-label="Next">
                        <img src="./image/right-mtall.png"></img>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
