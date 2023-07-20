import React ,{useState} from "react";
import '../Course/Lesson.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Lesson()
{
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
    return(
        <div className="backcolo-dev">
        <Navbar></Navbar>
        <div className="body-course">
            <div className="head-page-course">
                <a href="/" className="head-page-home">
                    <p>Home</p> 
                    <p className="btn-head-page"> > </p>
                </a>
                <a href="/allcourses" className="head-page-allcour">
                    <p>All courses</p> 
                    <p className="btn-head-page-all"> > </p>
                </a>    
                <a href="/course" className="head-page-cour">
                    <p>Course detail</p> 
                    <p className="btn-head-page-all"> > </p>
                </a>  
                <a href="/lesson" className="head-page-cour next-lesson">
                    <p>Lesson detail</p> 
                </a> 
            </div>
            <div className="body-page-course">  
                <div className="row body-page-head">
                    <div className="col">
                        <div className="imgpage-html">
                            <img src="./image/Rectangle 7.png" className="img-html-body"></img>
                        </div>
                    </div>
                </div>   

                <div className="row body-page-head">
                    <div className="col">
                        <div className="coures-learn-devlist">
                            <a
                                href="##"
                                type='button'
                                onClick={() => handleOptionClick('lessons')}
                                className={selectedOption === 'lessons' ? 'selected ' : 'default'}
                            >
                                <p className="txtlesson-cour txtdescript">Descriptions</p>

                            </a>
                            <a
                                href="##"
                                type='button'
                                onClick={() => handleOptionClick('teacher')}
                                className={selectedOption === 'teacher' ? 'selected ' : 'default'}
                            >
                                    <p className="txtlesson-cour-tea">Documents</p>
                            </a>
                            
                            {selectedOption === 'lessons' && (
                                <>
                                <div className="but-cour-dev1"></div>
                                <div className="but-lesson-blu but-blu-descript"></div>
                                <p className="txtdes-less">Descriptions lesson</p>
                                <p className="txtdes-less-viv">
                                Vivamus volutpat eros pulvinar velit laoreet, 
                                sit amet egestas erat dignissim. Sed quis rutrum tellus, 
                                sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum.
                                Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque.
                                Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, 
                                a euismod nulla dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc. 
                                Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique.
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                                Vestibulum ligula libero, feugiat faucibus mattis eget, pulvinar et ligula.</p>
                                <>
                                    <p className="txtdes-less">Requirements</p>
                                    <p className="txtdes-less-viv">
                                    Vivamus volutpat eros pulvinar velit laoreet, 
                                    sit amet egestas erat dignissim. Sed quis rutrum tellus, 
                                    sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum.
                                    Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque.
                                    Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, 
                                    a euismod nulla dignissim. Aenean viverra tincidunt nibh, in imperdiet nunc. 
                                    Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique.
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                                    Vestibulum ligula libero, feugiat faucibus mattis eget, pulvinar et ligula.</p>
                                </>
                                <p className="txtless-tag">Tag:</p>

                                <a
                                href="/##"
                                type="button"
                                className="next-learn-foot"
                                >
                                    <p>#learn</p>
                                </a>
                                <a
                                href="/##"
                                type="button"
                                className="nexxt-html"
                                >
                                    <p>#html</p>
                                </a>
                                <a
                                href="/##"
                                type="button"
                                className="nexxt-css"
                                >
                                    <p>#css</p>
                                </a>
                                <a
                                href="/##"
                                type="button"
                                className="nexxt-coder"
                                >
                                    <p>#coder</p>
                                </a>
                                <a
                                href="/##"
                                type="button"
                                className="nexxt-developer"
                                >
                                    <p>#developer</p>
                                </a>
                                <a
                                href="/##"
                                type="button"
                                className="nexxt-js"
                                >
                                    <p>#js</p>
                                </a>

                                </>
                                
                            )}
                         
                            {selectedOption === 'teacher' && 
                                (
                                    <>
                                        <div className="but-cour-dev1"></div>
                                        <div className="but-teach-blu but-blu-descript2"></div>
                                        <p className="txtprogram">Program</p>
                                        <div>
                                            <div className="btn-prorgram"></div>
                                            <img src="./image/Groupdoc.png" className="img-docpro"></img>
                                            <p className="txtdoc-lesson">Lesson</p>
                                            <p className="txtdoc-program">Program learn HTML/CSS</p>
                                            <a 
                                            type="button"
                                            href="/#"
                                            className="btn-preview"
                                            >
                                                <p>Preview</p>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="btn-prorgram progam2"></div>
                                            <img src="./image/pdf.png" className="img-docpro"></img>
                                            <p className="txtdoc-lesson">PDF</p>
                                            <p className="txtdoc-program">Download course slides</p>
                                            <a 
                                            type="button"
                                            href="/#"
                                            className="btn-preview"
                                            >
                                                <p>Preview</p>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="btn-prorgram progam2 "></div>
                                            <img src="./image/Group 90.png" className="img-docpro"></img>
                                            <p className="txtdoc-lesson">Video</p>
                                            <p className="txtdoc-program">Download course slides</p>
                                            <a 
                                            type="button"
                                            href="/#"
                                            className="btn-preview"
                                            >
                                                <p>Preview</p>
                                            </a>
                                        </div>
                                    </>
                                )}
                           
                        </div>
                    </div>
                    <div className="col">
                        <div className="des-cours-gr-rv">
                            <img src="./image/3hs.png"></img>
                            <p className="txt3hs">Learners</p>
                            <p className="txtlearn-cour"> : </p>
                            <p className="solearn-cour">500</p>
                            <div className="btn-courn-solearn"></div>
                            <div className="magin-cours-one">
                                 <img src="./image/bang.png"></img>
                                <p className="txt3hs">Lessons</p>
                                <p className="txtlearn-cour"> : </p>
                                <p className="solearn-cour">100 lesson</p>
                                <div className="btn-courn-solearn"></div>
                            </div>
                            <div className="magin-cours-one">
                                 <img src="./image/dho.png"></img>
                                <p className="txt3hs">Times</p>
                                <p className="txtlearn-cour"> : </p>
                                <p className="solearn-cour">80 hours</p>
                                <div className="btn-courn-solearn"></div>
                            </div>
                            <div className="magin-cours-one">
                                 <img src="./image/key.png"></img>
                                <p className="txt3hs">Learners</p>
                                <p className="txtlearn-cour"> : </p>
                                <p className="solearn-cour-code">#learn,#code</p>
                                
                            </div>
                            <div className="btn-courn-solearn-end"></div>
                            <div className="magin-cours-one">
                                 <img src="./image/1do.png"></img>
                                <p className="txt3hs">Learners</p>
                                <p className="txtlearn-cour"> : </p>
                                <p className="solearn-cour">Free</p>

                            </div>
                            <div className="btn-courn-solearn-end"></div>
                            <div>
                                <a href="##" className="btn-end-learndev">
                                <p>
                                Kết thúc khoá học
                                </p>
                                </a>
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
                                <a  href='/'type='button' className="btn-oth-foot">
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
    )
}