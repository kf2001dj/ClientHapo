import React from 'react';

import './Body_Profile.css'
export default function Body_Profile()
{
    return(
        <div className='container text-center'>
            <div className='fontuser-pro'>
                <img src='./image/Ellipse 25.png'></img>
                <img src='./image/came.png' className='came'></img>
                <div className='pro-textAdmin'>
                    <p className='pro-textone'>Võ Hoài Nam</p>
                    <p className='pro-texttwo'>namvh@gmail.com</p>
                    <div className='pro-btnadone'></div>
                    <div className='pro-day'>
                        <img src='./image/sn.png' className='img-pro-sn'></img>
                        <p className='txt-daypro'>10/10/2998</p>
                    </div>
                    <div className='btn-pro-sn'></div>
                    <div className='pro-phon'>
                        <img src='./image/phonblu.png' className='img-pro-phon'></img>
                        <p className='txt-phonpro'>0123456789</p>
                    </div>
                    <div className='btn-pro-sn'></div>
                    <div className='pro-home'>
                        <img src='./image/homeblu.png' className='img-pro-home'></img>
                        <p className='txt-homepro'>Cầu Giấy, Hà Nội</p>
                    </div>
                    <div className='btn-pro-sn'></div>
                    <p className='pro-txtad-cm'> 
                    Vivamus volutpat eros pulvinar velit laoreet, 
                    sit amet egestas erat dignissim. Sed quis rutrum tellus, 
                    sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum.
                     Nam nulla ippsumipsum, them venenatis 
                    </p>
                </div>
            </div>

            <div className='fonttext-pro'>
                <div className='pro-Mylearn'>
                    <p className='text-mylearn'>My courses</p>
                    <div className='btn-pro-one'></div>
                    <div className='btn-pro-two'></div>
                </div>

                <div className='pro-list-learn'>
                    <div className='pro-list-html'>
                        <img src='./image/Ellipse 27.png'></img>
                        <p className='pro-txthtml'>HTML</p>
                    </div>
                    <div className='pro-list-css'>
                        <img src='./image/Ellipse 28.png'></img>
                        <p className='pro-txtcss'>CSS</p>
                    </div>
                    <div className='pro-list-swit'>
                        <img src='./image/Ellipse 29.png'></img>
                        <p className='pro-txtswit'>Swift 4</p>
                    </div>
                    <div className='pro-list-cc'>
                        <img src='./image/Ellipse 30.png'></img>
                        <p className='pro-txtcc'>C#</p>
                    </div>
                    <div className='pro-list-agu'>
                        <img src='./image/Ellipse 31.png'></img>
                        <p className='pro-txtagu'>Angular</p>
                    </div>
                    <div className='pro-list-addcour'>
                        <a href='/' type='button'>
                            <img src='./image/Ellipse 32.png'></img>
                            <div className='pro-plus'>
                                <img src='./image/Vectorpro.png'></img>
                            </div>
                        </a>
                        <p className='pro-txtaddcour'>Add course</p>
                    </div>
                </div>

                <div className='pro-edit-file'>
                    <p className='text-editpro'>Edit profile</p>
                    <div className='btn-pro-one'></div>
                    <div className='btn-pro-two'></div>
                </div>

                <div className='list-tt'>
                    <div className='pro-txtname'>
                        <p className='txtname-pro'>
                            Name:
                        </p>
                        <input className='ipt-txtname' placeholder='Your name...'></input>
                    </div>

                    <div className='pro-txtemail'>
                        <p className='txtemail-pro'>
                            Email:
                        </p>
                        <input className='ipt-txtemail' placeholder='Your email...'></input>
                    </div>

                </div>

                <div className='list-tt'>
                    <div className='pro-txtname'>
                        <p className='txtdate-pro'>
                        Date of birthday:
                        </p>
                        <input className='ipt-txtdate' type="date" ></input>
                    </div>

                    <div className='pro-txtemail'>
                        <p className='txtemail-pro'>
                        Phone:   
                        </p>
                        <input className='ipt-txtemail' placeholder='Your address...'></input>
                    </div>
                    
                </div>

                <div className='list-tt'>
                    <div className='pro-txtname'>
                        <p className='txtname-pro'>
                        Address:
                        </p>
                        <input className='ipt-txtname' placeholder='Your address...'></input>
                    </div>

                    <div className='pro-txtemail'>
                        <p className='txtabout-pro'>
                        About me:
                        </p>
                        <textarea className='ipt-textAbme' placeholder='About you...'> 
                        </textarea>
                    </div>
                    
                </div>


            </div>

        </div>
    )
}