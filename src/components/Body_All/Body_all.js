import '../Body_All/allcour.css';

import React, {useState} from 'react';

export default function Body_all(){
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    //Teacher
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionSelect = (event) => {
      setSelectedOption(event.target.value);
    };
    // số người hoc
    const [Optionsonguoi, setSonguoiOption] = useState('');
    const songuoiOptionSelect = (event) => {
      setSonguoiOption(event.target.value);
    };
    //tgianhoc
    const [Optiontime, setTimeOption] = useState('');
    const timeOptionSelect = (event) => {
      setTimeOption(event.target.value);
    };
    //sobaihoc
    const [Optionsobai, setsobaiOption] = useState('');
    const sobaiOptionSelect = (event) => {
      setsobaiOption(event.target.value);
    };

    //tags
    const [Optiontag, settagOption] = useState('');
    const tagOptionSelect = (event) => {
      settagOption(event.target.value);
    };
    //review
    const [Optionview, setviewOption] = useState('');
    const viewOptionSelect = (event) => {
      setviewOption(event.target.value);
    };

    // page 123
    // const [currentPage, setCurrentPage] = useState(1);
    // const handleClick = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };
    return(
        <div className='container body-list-learn text-center'>
            
            <div className='filter'>
                  {/* Nút ấn */}
                <button onClick={toggleVisibility} className="btnfilter">
                    {isVisible ? '' : ''}
                    <img src='./image/filter.png'></img>
                    <p className='txtFilter'>Filter</p>
                </button>

                <div className='in-search'>
                    <input className='ip-list' placeholder='Search...'></input>
                    <img src='./image/klup.png' className='ip-note-lup' ></img>
                    <button className='btn-search'>
                        <p className='txt-search'>Tìm kiếm</p>
                    </button>
                </div>
                  {/* Phần tử cần hiển thị */}
                {isVisible && (
                    <div  className='list-filter-note'>
                        <p className='txt-list-fil'>Lọc theo</p>
                        <a  type='button' className='btn-list-new'>
                            <p className='txt-list-new'>Mới nhất</p>
                        </a>
                        <a  type='button' className='btn-list-los'>
                            <p className='txt-list-los'>Cũ nhất</p>
                        </a>
                    
                        <select className="form-select-teacher" value={selectedOption} onChange={handleOptionSelect}>
                            <option hidden disabled value="">
                            Teacher
                            </option>
                            <option value="option1">Thành Đông</option>
                            <option value="option2">Tuyết Linh</option>
                            <option value="option3">Anh Dương</option>
                            <option value="option4">Anh Nghĩa</option>
                            <option value="option5">Anh Tuấn</option>
                        </select>
                       
                        <select className="form-select-learn" value={Optionsonguoi} onChange={songuoiOptionSelect}>
                            <option hidden disabled value="">
                                Số người học 
                            </option>
                            <option value="option1">30 người</option>
                            <option value="option2">45 người</option>
                            <option value="option3">60 người</option>
                        </select>
                            
                        <select className="form-select-time" value={Optiontime} onChange={timeOptionSelect}>
                            <option hidden disabled value="">
                                Thời gian học 
                            </option>
                            <option value="option1">8h30-11h55</option>
                            <option value="option2">12h55-17h55</option>
                            <option value="option3">17h55-21h55</option>
                        </select>

                        <select className="form-select-sobai" value={Optionsobai} onChange={sobaiOptionSelect}>
                            <option hidden disabled value="">
                                Số bài học 
                            </option>
                            <option value="option1">Tăng dần</option>
                            <option value="option2">Giảm dần</option>
                        </select>
                  
                        <select className="form-select-tag" value={Optiontag} onChange={tagOptionSelect}>
                            <option hidden disabled value="">
                                Tags
                            </option>
                            <option value="option1">Tăng dần</option>
                            <option value="option2">Giảm dần</option>
                        </select>

                        <select className="form-select-view" value={Optionview} onChange={viewOptionSelect}>
                            <option hidden disabled value="">
                            Review
                            </option>
                            <option value="option1">Tăng dần</option>
                            <option value="option2">Giảm dần</option>
                        </select>

                    </div>
                )}
                  {/* Phần tử mới */}
                <div className={isVisible ? '' : ''}  >
                    <div className='list-learn-dev'>
                        <div className='row custom-row-dev'>
                            <div className='col-md-6 custom-margin-one'>
                                <img src='./image/Ellipse 9.png'></img>
                                <p className='cust-learn-html'>HTML Fundamentals</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a href='/course' type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>

                            </div>
                            <div className='col-md-6 custom-margin'>
                                <img src='./image/Ellipse 10.png'></img>
                                <p className='cust-learn-css'>CSS Fundamentals</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                        </div>

                        <div className='row custom-row-dev-one'>
                            <div className='col-md-6 custom-margin-one'>
                                <img src='./image/Ellipse 11.png'></img>
                                <p className='cust-learn-php'>PHP Tutorial</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                            <div className='col-md-6 custom-margin'>
                                <img src='./image/Ellipse 12.png'></img>
                                <p className='cust-learn-css'>SQL Fundamentals</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                        </div>

                        <div className='row custom-row-dev-tw'>
                            <div className='col-md-6 custom-margin-one'>
                            <img src='./image/Ellipse 13.png'></img>
                                <p className='cust-learn-sw'>Swift 4 Fundamentals</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                            <div className='col-md-6 custom-margin'>
                                <img src='./image/Ellipse 14.png'></img>
                                <p className='cust-learn-cc'>C# Tutorial</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                        </div>

                        <div className='row custom-row-dev-th'>
                            <div className='col-md-6 custom-margin-one'>
                                <img src='./image/Ellipse 15.png'></img>
                                <p className='cust-learn-rb'>Ruby Tutorial</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                            <div className='col-md-6 custom-margin'>
                                <img src='./image/Ellipse 18.png'></img>
                                <p className='cust-learn-c'>C Tutorial</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                        </div>

                        <div className='row custom-row-dev-or'>
                            <div className='col-md-6 custom-margin-one'>
                                <img src='./image/Ellipse 16.png'></img>
                                <p className='cust-learn-jq'>jQuery Tutorial</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                            <div className='col-md-6 custom-margin'>
                                <img src='./image/Ellipse 19.png'></img>
                                <p className='cust-learn-ang'>Angular + NestJS</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                        </div>

                        <div className='row custom-row-dev-f'>
                            <div className='col-md-6 custom-margin-one'>
                                <img src='./image/Ellipse 17.png'></img>
                                <p className='cust-learn-data'>Data Science with Python</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                            <div className='col-md-6 custom-margin'>
                                <img src='./image/Ellipse 20.png'></img>
                                <p className='cust-learn-mach'>Machine Learning</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                        </div>

                        <div className='row custom-row-dev-s'>
                            <div className='col-md-6 custom-margin-one'>
                                <img src='./image/Ellipse 9.png'></img>
                                <p className='cust-learn-html'>HTML Fundamentals</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                            <div className='col-md-6 custom-margin'>
                                <img src='./image/Ellipse 10.png'></img>
                                <p className='cust-learn-css'>CSS Fundamentals</p>
                                <p className='txt-learn-html'>
                                Practice during lessons, practice between lessons,
                                 practice whenever you can. Master the task, 
                                 then reinforce and test your knowledge with fun, 
                                 hands-on exercises and interactive quizzes.
                                </p>
                                <a type='button' className='bt-learn-more'>
                                    <p className='txtmore-dev'>More</p>
                                </a>
                                <div className='btn-back-learn'></div>
                                <p className='txtlearn-dev'>Learners</p>
                                <p className='txtless-dev'>Lessons</p>
                                <p className='txttime-dev'>Times</p>
                                <p className='solearn-dev'>16,882</p>
                                <p className='soless-dev'>2,689</p>
                                <p className='sotime-dev'>100 (h)</p>
                            </div>
                        </div>
                        <div className='list-dev-page'>
                            <div class="row">
                                <div class="col-md-12">
                                    <ul class="pagination">
                                        <li class="page-item previous">
                                            <a class="page-link" href="" aria-label="Previous">
                                                <img src='./image/right-mt.png'></img>
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" >
                                                <p>1</p>
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#"  ><p>2</p></a>
                                        </li>
                                        <li class="page-item ">
                                            <a class="page-link" href="#" ><p>3</p></a>
                                        </li>
                                        <li class="page-item next">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <img src='./image/left-mt.png'></img>
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


    )


}