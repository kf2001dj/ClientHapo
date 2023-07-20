import React ,{useState} from "react";
import '../Course/Course.css';


export default function Course()
{
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
    return(
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
                    <div className="col">
                        <div className="des-cours">
                            <p className="txtdes-cours">Descriptions course</p>
                            <div className="btndes-cours"></div>
                            <p className="txtlearn-des">
                            Vivamus volutpat eros pulvinar velit
                             laoreet, sit amet egestas erat dignissim.
                              Sed quis rutrum tellus, sit amet viverra
                               felis. Cras sagittis sem sit amet urna 
                               feugiat rutrum. Nam nulla ipsum, venenatis 
                               malesuada felis quis, ultricies convallis neque.
                                Pellentesque tristique fringilla tempus. Vivamus bibendum 
                                nibh in dolor pharetra, a euismod nulla dignissim. Aenean 
                                viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu
                                 ante pretium, consectetur leo at, congue quam. Nullam 
                                 hendrerit porta ante vitae tristique.
                            </p>
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
                                <p className="txtlesson-cour">Lessons</p>

                            </a>
                            <a
                                href="/teacher"
                                type='button'
                                onClick={() => handleOptionClick('teacher')}
                                className={selectedOption === 'teacher' ? 'selected ' : 'default'}
                            >
                               
                                    <p className="txtlesson-cour-tea">Teacher</p>
                              
                            </a>
                            <a
                                href="/review"
                                type='button'
                                onClick={() => handleOptionClick('reviews')}
                                className={selectedOption === 'reviews' ? 'selected ' : 'default'}
                            >
                               <p className="txtlesson-cour-rev">Reviews</p>
                   
                            </a>

                            {selectedOption === 'lessons' && (
                                <>
                                <div className="but-cour-dev1"></div>
                                <div className="but-lesson-blu"></div>
                                <div className='in-search-dev'>
                                    <input className='ip-list-dev' placeholder='Search...'></input>
                                    <img src='./image/klup.png' className='ip-note-lup-dev' ></img>
                                    <button className='btn-search-dev'>
                                        <p className='txt-search-dev'>Tìm kiếm</p>
                                    </button>
                                    <a href="/lesson" type="button" className='btn-slot-dev'>
                                        <p className='txt-slot-dev'>Tham gia khoá học</p>
                                    </a>
                                </div>

                                <div> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">1.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                
                                <div className="list-oth2"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">2.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                
                                <div className="list-oth3"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">3.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
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
                                    Aenean egestas magna at porttitor vehicula.
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
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth5"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">6.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth2"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">7.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
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
                                    Aenean egestas magna at porttitor vehicula. 
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
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth2"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">10.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth5"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">11.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
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
                                     Aenean egestas magna at porttitor vehicula. 
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
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth2"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">14.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth5"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">15.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth2"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">16.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth5"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">17.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth2"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">18.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth5"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">19.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth2"> 
                                    <div className="but-list-font"></div>
                                    <p className="oth-solist-dev1">20.</p>
                                    <p className="oht-txtlist1-dev1">
                                    Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit.
                                    </p>
                                    <a href="/" type="button" className="bt-oth-learn">
                                        <p>Learn</p>
                                    </a>
                                </div>
                                <div className="list-oth20"> 
                                    <div className="but-list-font"></div>
                                </div> 
                              
                                <div className='list-dev-page'>
                                    <div class="row">
                                        <div class="col-md-12 cour-list-page">
                                            <ul class="pagination">
                                                <li class="page-item previous">
                                                    <a class="page-link  right-courlearn" href="" aria-label="Previous">
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
                                                    <a class="page-link right-courlearn" href="#" aria-label="Next">
                                                        <img src='./image/left-mt.png'></img>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                
                                </>
                                
                            )}
                         
                            {selectedOption === 'teacher' && 
                                (
                                    <>
                                        <div className="but-cour-dev1"></div>
                                        <div className="but-teach-blu"></div>

                                    </>
                                      

                                )}
                           
                            {selectedOption === 'reviews' && (
                                <>
                                <div className="but-cour-dev1"></div>
                                <div className="but-rew-blu"></div>

                                </>
                                
                            )}

                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="des-cours-gr">
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
                                <div className="btn-courn-solearn"></div>
                            </div>
                            <div className="magin-cours-one">
                                 <img src="./image/1do.png"></img>
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
                                <a  href='/'type='button' className="btn-oth-foot">
                                    <p className="oth-viewtxt">View all ours courses</p>
                                </a>
                            </div>
                        </div>



                    </div>
                </div>   
               
            </div>


               
        </div>
    )
}