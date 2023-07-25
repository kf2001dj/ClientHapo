import React, { useState, useEffect } from 'react';
import './Body_Profile.css'


export default function Body_Profile()
{
    const [user, setUser] = useState({});
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        // Fetch user data using the userId from localStorage
        if (userId) {
          fetch(`http://localhost:4000/api/users/${userId}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Response was not ok');
              }
              return response.json();
            })
            .then((data) => setUser(data))
            .catch((error) => {
              console.error('Error fetching user data: ', error);
            });
        }else {
            //bắt buộc phải đăng nhập thì ms edit được
            setUser({});
        }
      }, [userId]);

    const [isEditing, setIsEditing] = useState(false);
    
    // State variables to manage form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [about, setAbout] = useState('');

    const handleUpdate = () => {
    // Create a new user object with updated data
    const updatedUser = {
      ...user,
      name: name || user.name,
      email: email || user.email,
      birthdate: birthdate || user.birthdate, // Sử dụng định dạng ngày tháng mới
      phone: phone || user.phone,
      address: address || user.address,
      about: about || user.about,
    };

    // Update user data on the server
    fetch(`http://localhost:4000/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
      credentials: 'include',
    })
    .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Show success message or handle the response data as needed
        setUser(updatedUser);
        console.log('User data updated successfully:', data);
        
      })
      .catch((error) => {
        console.error('Error updating user data: ', error);
      });
    };

    return(
        <div className='container text-center'>
            <div className='fontuser-pro'>
                    <div>
                        <img
                        key={user.id}
                        className='imgid-profile'
                        src={user.image_url} // đường dẫn hình ảnh trong cơ sở dữ liệu 
                        alt={`lỗi hình ảnh ${user.id}`}
                        onError={() => console.error('Lỗi tải hình ảnh.')}
                         />
                        <img src='./image/came.png' className='came'></img>
                        <div className='pro-textAdmin'>
                        <p className='pro-textone'>{user.name}</p>
                        <p className='pro-texttwo'>{user.email}</p>
                        <div className='pro-btnadone'></div>
                        <div className='pro-day'>
                            <img src='./image/sn.png' className='img-pro-sn'></img>
                            <p className='txt-daypro'
                            value={birthdate || user.birthdate  }
                            onChange={(e) => setBirthdate(e.target.value)}
                            >{user.birthdate}</p>
                        </div>
                        <div className='btn-pro-sn'></div>
                        <div className='pro-phon'>
                            <img src='./image/phonblu.png' className='img-pro-phon'></img>
                            <p className='txt-phonpro'>{user.phone}</p>
                        </div>
                        <div className='btn-pro-sn'></div>
                        <div className='pro-home'>
                            <img src='./image/homeblu.png' className='img-pro-home'></img>
                            <p className='txt-homepro'>{user.address}</p>
                        </div>
                        <div className='btn-pro-sn'></div>
                            <p className='pro-txtad-cm'> 
                                {user.about}
                            </p>
                        </div>
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
                        <img src={user.mycourses}></img>
                        <p className='pro-txthtml'>{user.textcourse}</p>
                    </div>

                    <div className='pro-list-css'>
                        <img src={user.mycourses}></img>
                        <p className='pro-txtcss'>{user.textcourse}</p>
                    </div>
                    {/* <div className='pro-list-swit'>
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
                    </div> */}
                    <div className='pro-list-addcour'>
                        <a href='/allcourses' type='button'>
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
                        <input className='ipt-txtname' placeholder='Your name...'
                        value={name || user.name}
                        onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className='pro-txtemail'>
                        <p className='txtemail-pro'>
                            Email:
                        </p>
                        <input className='ipt-txtemail' placeholder='Your email...'
                        value={email || user.email}
                        onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='list-tt'>
                    <div className='pro-txtname'>
                        <p className='txtdate-pro'>
                        Date of birthday:
                        </p>
                        <input className='ipt-txtdate' 
                     
                        placeholder='dd/mm/yyyy'
                        value={ birthdate || user.birthdate  }
                        onChange={(e) => setBirthdate(e.target.value)}
                        ></input>
                    </div>
                    <div className='pro-txtemail'>
                        <p className='txtemail-pro'>
                        Phone:   
                        </p>
                        <input className='ipt-txtemail' placeholder='Your address...'
                        value={ phone || user.phone}
                        onChange={(e) => setPhone(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='list-tt'>
                    <div className='pro-txtname'>
                        <p className='txtname-pro'>
                        Address:
                        </p>
                        <input className='ipt-txtname' placeholder='Your address...'
                        value={ address || user.address}
                        onChange={ (e) => setAddress(e.target.value)}
                        ></input>
                    </div>
                    <div className='pro-txtemail'>
                        <p className='txtabout-pro'>
                        About me:
                        </p>
                        <textarea className='ipt-textAbme' placeholder='About you...'
                        value={about || user.about}
                        onChange={ (e) => setAbout(e.target.value)}
                        > 
                        </textarea>
                    </div>
                </div>
                <button className='btn-updateprofile' onClick={handleUpdate}>
                    <p> Update</p>
               </button>
            </div>

        </div>
    )
}