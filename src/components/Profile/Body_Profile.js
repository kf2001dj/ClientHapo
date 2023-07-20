import React, { useState, useEffect } from 'react';

import './Body_Profile.css'
export default function Body_Profile()
{
    const [images, setImages] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
      // Gọi API để lấy dữ liệu từ server Express
        fetch('http://localhost:4000/api/profile')
        .then((response) => response.json())
        .then((data) => setImages(data))
        .catch((error) => {
          console.error('Lỗi khi gọi API: ', error);
        });
        fetch('http://localhost:4000/api/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => {
          console.error('Lỗi khi gọi API: ', error);
        });
    }, []);

    return(
        <div className='container text-center'>
            <div className='fontuser-pro'>
                {images.map((image) => (
                    <div key={image.id}>
                        <img
                        className='imgid-profile'
                        src={image.profile_image_url} // đường dẫn hình ảnh trong cơ sở dữ liệu 
                        alt={`lỗi hình ảnh ${image.id}`}
                        onError={() => console.error('Lỗi tải hình ảnh.')}
                         />
                        <img src='./image/came.png' className='came'></img>
                        <div className='pro-textAdmin'>
                        <p className='pro-textone'>{image.name}</p>
                        {users.map((us) => (
                             <p className='pro-texttwo' key={us.id}>{us.email}</p>
                        ))}
                       
                        <div className='pro-btnadone'></div>
                        <div className='pro-day'>
                            <img src='./image/sn.png' className='img-pro-sn'></img>
                            <p className='txt-daypro'>{image.birthdate}</p>
                        </div>
                        <div className='btn-pro-sn'></div>
                        <div className='pro-phon'>
                            <img src='./image/phonblu.png' className='img-pro-phon'></img>
                            <p className='txt-phonpro'>{image.phone}</p>
                        </div>
                        <div className='btn-pro-sn'></div>
                        <div className='pro-home'>
                            <img src='./image/homeblu.png' className='img-pro-home'></img>
                            <p className='txt-homepro'>{image.address}</p>
                        </div>
                        <div className='btn-pro-sn'></div>
                            <p className='pro-txtad-cm'> 
                                {image.about_me}
                            </p>
                        </div>
                    </div>
                   
                ))}
                
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