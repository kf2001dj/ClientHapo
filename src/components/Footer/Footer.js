import '../Footer/Footer.css'
import React from 'react'
export default function Footer(){
    return(
        <footer>
            <div className='txtFontfoot'>
                <div className='imgHapotwo'><img src='./image/Hapo_Learn_white 1.png'></img></div>
                <div className='txtHapotwo'><p>Interactive lessons, "on-the-go" practice, peer support.</p></div>
                <div className='txtHomefoot'><p>Home</p></div>
                <div className='txtFeatfoot'><p>Features</p></div>
                <div className='txtCourfoot'><p>Courses</p></div>
                <div className='txtBlogfoot'><p>Blog</p></div>
                <div className='txtContfoot'><p>Contact</p></div>
                <div className='txtTermfoot'><p>Terms of Use</p></div>
                <div className='txtFaq'><p>FAQ</p></div>
                <div className='imgFace'><img src='./image/Group 3.png'></img></div>
                <div className='imgPhone'><img src='./image/Group 5.png'></img></div>
                <div className='imgMail'><img src='./image/Group 4.png'></img></div>
                <div className='txtLinkHapo'><p>facebook.com/tuyen.dung.haposoft</p></div>
                <div className='fontPass'><p className="txtPass" > © 2020 HapoLearn, Inc. All rights reserved.</p></div>
           
            </div>
        </footer> 

    );

}