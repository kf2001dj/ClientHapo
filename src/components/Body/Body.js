import "../Body/Body.scss";
import React from "react";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Body() {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000, // Tự động chạy slider sau mỗi 3 giây
  // };

  return (
    <div className="conatiner body">
      <div className="body-header">
        <img
          src="./image/Hapo_Learn_banner 1.png"
          className="imgHapoLearn"
        ></img>
        <div className="fontheadHapo">
          <div className="txtLearn">
            <p>Learn Anytime, Anywhere </p>
          </div>
          <div className="imgAthapo">
            <p>
              at HapoLearn{" "}
              <img className="imgCuHapo" src="./image/Group 6.png"></img> !
            </p>
          </div>
          <div className="txtInter">
            <p> Interactive lessons, "on-the-go" practice, peer support. </p>
          </div>
          <button className="btnStart">
            <a href="/">
              {" "}
              <p className="txtStart">Start Learning Now! </p>
            </a>
          </button>
        </div>
        <div className="txtFont"></div>
        <div className="btnMeschat">
          <img src="./image/Group 8.png"></img>
        </div>
        <div className="btnMeschat2">
          <img src="./image/Group 8.png"></img>
        </div>
        <div className="Chatbox">
          <div className="imgCu">
            <img src="./image/Ellipse 7.png"></img>
          </div>
          <div className="txtHapo">
            <p>HapoLearn</p>
          </div>
          <div className="btnEx">
            <img src="./image/Exclude.png"></img>
          </div>
          <div className="fontHe">
            <p className="txtHe">
              HapoLearn xin chào bạn. <br></br>
              Bạn có cần chúng tôi hỗ trợ gì không?
            </p>
          </div>
          <button className="btnMes">
            <a href="/">
              <div className="imgVec">
                <img src="./image/Vector.png"></img>
              </div>
              <p className="txtMes">Đăng nhập vào Messenger</p>
            </a>
          </button>
          <div className="txtChatmes">
            <p>Chat với HapoLearn trong Messenger</p>
          </div>
        </div>
      </div>
      <div></div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="container Listconten pt-3 text-center">
        <div className="row">
          <div className="col-md-4 Listbox">
            <div className="ListHtml">
              <div className="itemHtml ">
                <img
                  src="./image/Rectangle 7.png"
                  className="imgHtml"
                  alt="Html"
                />
              </div>
              <p className="Playheading">HTML/CSS/js Tutorial</p>
              <p className="Playtime">
                I knew hardly anything about HTML, JS, and CSS before entering
                New Media. I had coded quite a bit, but never touched anything
                in regards to web development.
              </p>
              <button className="btnTake">
                <a href="/">
                  {" "}
                  <p className="txtTake">Take This Course </p>
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-4 Listbox">
            <div className="ListLava">
              <div className="itemLava">
                <img
                  src="./image/laravel-1-logo-black-and-white 1.png"
                  className="imgLava"
                  alt="Laravel"
                />
              </div>
              <p className="Playheading">LARAVEL Tutorial</p>
              <p className="Playtime">
                I knew hardly anything about HTML, JS, and CSS before entering
                New Media. I had coded quite a bit, but never touched anything
                in regards to web development.
              </p>
              <button className="btnTake">
                <a href="/">
                  {" "}
                  <p className="txtTake">Take This Course </p>
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-4 Listbox ">
            <div className="ListPhp">
              <div className="itemPhp">
                <img
                  src="./image/Rectangle 15.png"
                  className="imgPhp"
                  alt="Php"
                />
              </div>
              <p className="Playheading">PHP Tutorial</p>
              <p className="Playtime">
                I knew hardly anything about HTML, JS, and CSS before entering
                New Media. I had coded quite a bit, but never touched anything
                in regards to web development.
              </p>
              <button className="btnTake">
                <a href="/">
                  {" "}
                  <p className="txtTake">Take This Course </p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////// */}
      <div className="Listbox2">
        <div className="ListHtml2">
          <div className="itemHtml2 ">
            <img
              src="./image/Rectangle 7.png"
              className="imgHtml2"
              alt="Html"
            />
          </div>
          <p className="Playheading2">HTML/CSS/js Tutorial</p>
          <p className="Playtime2">
            I knew hardly anything about HTML, JS, and CSS before entering New
            Media. I had coded quite a bit, but never touched...
          </p>
          <a href="/allcourses" type="button" className="btnTake2">
            <p className="txtTake2">Take This Course </p>
          </a>
        </div>
      </div>
      <div className="Listbox2 Listboxjava2">
        <div className="ListHtml2">
          <div className="itemLara2">
            <img
              src="./image/laravel-1-logo-black-and-white 1.png"
              className="imgHtml2"
              alt="Laravel"
            />
          </div>
          <p className="Playheading2">LARAVEL Tutorial</p>
          <p className="Playtime2">
            I knew hardly anything about HTML, JS, and CSS before entering New
            Media. I had coded quite a bit, but never touched...
          </p>
          <a type="button" href="/allcourses" className="btnTake2">
            <p className="txtTake2">Take This Course </p>
          </a>
        </div>
      </div>
      <div className="Listbox2 Listboxphp2">
        <div className="ListHtml2">
          <div className="itemPhp2">
            <img
              src="./image/Rectangle 15.png"
              className="imgHtml2"
              alt="Php"
            />
          </div>
          <p className="Playheading2">PHP Tutorial</p>
          <p className="Playtime2">
            I knew hardly anything about HTML, JS, and CSS before entering New
            Media. I had coded quite a bit, but never touched...
          </p>
          <a type="button" href="/allcourses" className="btnTake2">
            <p className="txtTake2">Take This Course </p>
          </a>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="container ListOther">
        <div className="txtOther">
          <p>Other courses</p>
        </div>
      </div>
      <div className="ListOther2">
        <div className="txtOther2">
          <p>Other courses</p>
        </div>
      </div>
      <div className="fontOther"></div>
      <div className="fontOther2"></div>

      <div className="container ListSours pt-3 text-center">
        <div className="row">
          <div className="col-md-4 Listbox">
            <div className="ListHtml">
              <div className="itemCSS ">
                <img src="./image/CSS.png" className="imgCSS" alt="CSS" />
              </div>
              <p className="Playheading">CSS Tutorial</p>
              <p className="Playtime">
                I knew hardly anything about HTML, JS, and CSS before entering
                New Media. I had coded quite a bit, but never touched anything
                in regards to web development.
              </p>
              <button className="btnTake">
                <a href="/">
                  {" "}
                  <p className="txtTake">Take This Course </p>
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-4 Listbox">
            <div className="ListLava">
              <div className="itemRuby">
                <img src="./image/Group.png" className="imgRuby" alt="Ruby" />
              </div>
              <p className="Playheading">Ruby on rails Tutorial</p>
              <p className="Playtime">
                I knew hardly anything about HTML, JS, and CSS before entering
                New Media. I had coded quite a bit, but never touched anything
                in regards to web development.
              </p>
              <button className="btnTake">
                <a href="/">
                  {" "}
                  <p className="txtTake">Take This Course </p>
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-4 Listbox ">
            <div className="ListPhp">
              <div className="itemJava">
                <img src="./image/java 1.png" className="imgJava" alt="Java" />
              </div>
              <p className="Playheading">Java Tutorial</p>
              <p className="Playtime">
                I knew hardly anything about HTML, JS, and CSS before entering
                New Media. I had coded quite a bit, but never touched anything
                in regards to web development.
              </p>
              <button className="btnTake">
                <a href="/">
                  {" "}
                  <p className="txtTake">Take This Course </p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Listbox2">
        <div className="ListHtml2">
          <div className="itemJava2 ">
            <img src="./image/java 1.png" className="imgJava2" alt="CSS" />
          </div>
          <p className="Playheading2">Java Tutorial</p>
          <p className="Playtime2">
            I knew hardly anything about HTML, JS, and CSS before entering New
            Media. I had coded quite a bit, but never touched...
          </p>
          <a type="button" href="allcourses" className="btnTake2">
            <p className="txtTake2">Take This Course </p>
          </a>
        </div>
      </div>
      <div className="Listbox3">
        <div className="ListHtml2">
          <div className="itemRuby2">
            <img src="./image/Group.png" className="imgRuby2" alt="Ruby" />
          </div>
          <p className="Playheading2">Ruby on rails Tutorial</p>
          <p className="Playtime2">
            I knew hardly anything about HTML, JS, and CSS before entering New
            Media. I had coded quite a bit, but never touched...
          </p>
          <a type="button" href="allcourses" className="btnTake2">
            <p className="txtTake2">Take This Course </p>
          </a>
        </div>
      </div>
      <div className="Listbox3">
        <div className="ListHtml2">
          <div className="itemCss2">
            <img src="./image/CSS.png" className="imgCss2" />
          </div>
          <p className="Playheading2">CSS Tutorial</p>
          <p className="Playtime2">
            I knew hardly anything about HTML, JS, and CSS before entering New
            Media. I had coded quite a bit, but never touched...
          </p>
          <a href="/allcourses" className="btnTake2">
            <p className="txtTake2">Take This Course </p>
          </a>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="container ListOur">
        <div className="txtOur">
          <p>
            {" "}
            View All Our Courses <></>
            <img src="./image/muiten.png"></img>
          </p>
        </div>
      </div>
      <div className="txtOur2">
        <p>
          {" "}
          View All Our Courses <></>
          <img src="./image/muiten.png"></img>
        </p>
      </div>
      <div className="Laptop">
        <img src="./image/Rectangle 17.png" className="fontLap"></img>
        <img
          src="./image/transparent-1911160_1280.png"
          className="listLap"
        ></img>
        <div className="txtWhy">
          <p>Why HapoLearn?</p>
        </div>
        <img src="./image/tich.png" className="imgTich"></img>
        <div className="textNote">
          <p>Interactive lessons, "on-the-go" practice, peer support.</p>
        </div>
        <img src="./image/tich.png" className="imgTichA"></img>
        <div className="textNoteA">
          <p>Interactive lessons, "on-the-go" practice, peer support.</p>
        </div>
        <img src="./image/tich.png" className="imgTichB"></img>
        <div className="textNoteB">
          <p>Interactive lessons, "on-the-go" practice, peer support.</p>
        </div>
        <img src="./image/tich.png" className="imgTichC"></img>
        <div className="textNoteC">
          <p>Interactive lessons, "on-the-go" practice, peer support.</p>
        </div>
        <img src="./image/tich.png" className="imgTichD"></img>
        <div className="textNoteD">
          <p>Interactive lessons, "on-the-go" practice, peer support.</p>
        </div>
      </div>

      <div className="Laptopdis2">
        <img src="./image/Rectangle 17.png" className="fontLap2"></img>
        <img
          src="./image/transparent-1911160_1280.png"
          className="listLap2"
        ></img>
        <div className="txtWhy2">
          <p>Why HapoLearn?</p>
        </div>
        <img src="./image/tich.png" className="imgTich2"></img>
        <div className="textNote2">
          <p>Interactive lessons, "on-the-go" practice, peer support.</p>
        </div>
        <img src="./image/tich.png" className="imgTich2"></img>
        <div className="textNote2">
          <p>Interactive lessons, "on-the-go" practice, peer support.</p>
        </div>
        <img src="./image/tich.png" className="imgTich2"></img>
        <div className="textNote2">
          <p>Interactive lessons, "on-the-go" practice, peer support.</p>
        </div>
        <img src="./image/tich.png" className="imgTich2"></img>
        <div className="textNote2">
          <p>Interactive lessons, "on-the-go" practice, peer support.</p>
        </div>
        <img src="./image/tich.png" className="imgTich2"></img>
        <div className="textNote2">
          <p>Interactive lessons, "on-the-go" practice, peer support.</p>
        </div>
      </div>
      <div className="container Feedback">
        <div className="txtFee">
          <p>Feedback </p>
        </div>
      </div>
      <div className="Feedback2">
        <div className="txtFee2">
          <p>Feedback </p>
        </div>
      </div>
      <div className="FontFeed"></div>
      <div className="FontFeed1"></div>
      <div className="txtFeed container">
        <p>
          What other students turned professionals have to say about us after
          learning with us and reaching their goals
        </p>
      </div>
      <div className="txtFeed2">
        <p>
          What other students turned professionals have to say about us after
          learning with us and reaching their goals
        </p>
      </div>

      <div className="container cmtList-home">
        {/* <Slider {...settings}> */}
        <div>
          <img src="./image/Union.png" className="imgComOne"></img>
          <p className="txtPone">
            “A wonderful course on how to start. Eddie beautifully conveys all
            essentials of a becoming a good Angular developer. Very glad to have
            taken this course. Thank you Eddie Bryan.”
          </p>

          <div className="cmtBtOne"></div>
          <img src="./image/Group 11.png" className="btvOne"></img>
          <img src="./image/Ellipse 1.png" className="imgAdOne"></img>
          <p className="txtadmOne">Hoang Anh Nguyen</p>
          <p className="txtadDevone">PHP</p>
          <div className="imgOneStartone">
            <img src="./image/sao-1.png"></img>
          </div>
          <div className="imgOneStartwo">
            <img src="./image/sao-1.png"></img>
          </div>
          <div className="imgOneStarthree">
            <img src="./image/sao-1.png"></img>
          </div>
          <div className="imgOneStartfour">
            <img src="./image/sao-1.png"></img>
          </div>
          <div className="imgOneStartfive">
            <img src="./image/sao.png"></img>
          </div>
        </div>
        <div>
          <img src="./image/Union.png" className="imgComTwo"></img>
          <p className="txtPtwo">
            “A wonderful course on how to start. Eddie beautifully conveys all
            essentials of a becoming a good Angular developer. Very glad to have
            taken this course. Thank you Eddie Bryan.”
          </p>
          <div className="cmtBtTwo"></div>
          <img src="./image/Group 10.png" className="btvTwo"></img>
          <img src="./image/Ellipse 1.png" className="imgAdTwo"></img>
          <div className="txtTwodev">
            <p>Tuan Tran Hoang</p>
          </div>
          <div className="txtTwopython">
            <p>Python</p>
          </div>
          <div className="imgTwoStartone">
            <img src="./image/sao-1.png"></img>
          </div>
          <div className="imgTwoStarttwo">
            <img src="./image/sao-1.png"></img>
          </div>
          <div className="imgTwoStartthree">
            <img src="./image/sao-1.png"></img>
          </div>
          <div className="imgTwoStartfour">
            <img src="./image/sao-1.png"></img>
          </div>
          <div className="imgTwoStartfive">
            <img src="./image/-5.png"></img>
          </div>
          <div className="imgTwoStartsix">
            <img src="./image/sao.png"></img>
          </div>
        </div>
        {/* </Slider> */}
      </div>

      <div className="container Become">
        <img src="./image/Group 7.png" className="imgBe"></img>
        <p className="txtBecome"> Become a member of our growing community! </p>
        <button className="btnNow">
          <a href="/">
            {" "}
            <p className="txtNow">Start Learning Now! </p>
          </a>
        </button>
      </div>
      <div className="container Statistic">
        <div className="txtStat">
          <p>Statistic</p>
        </div>
      </div>

      <div className="btnStat"></div>
      <div className="container listdiem">
        <div className="txtCour">
          <p>Courses</p>
        </div>
        <div className="txtLess">
          <p>Lessons</p>
        </div>
        <div className="footLearn">
          <p>Learners</p>
        </div>
      </div>
      <div className="container listsodiem">
        <div className="txtListCour">
          <p>1,586</p>
        </div>
        <div className="txtListless">
          <p>2,689</p>
        </div>
        <div className="txtListlearn">
          <p>16,882</p>
        </div>
      </div>
    </div>
  );
}
