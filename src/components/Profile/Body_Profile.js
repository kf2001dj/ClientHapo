/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from "react";
import "./Body_Profile.scss";

function CourseImage({ courseImageUrl }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = courseImageUrl;
    image.onload = () => setIsLoading(false);
    image.onerror = () => console.error("Lỗi tải hình ảnh.");
  }, [courseImageUrl]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <img src={courseImageUrl} alt="Course" />;
}

export default function Body_Profile() {
  const [user, setUser] = useState({});
  const userId = localStorage.getItem("userId");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (userId) {
      // Fetch user data
      fetch(`http://localhost:5000/users/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setUser(data);

          // Fetch user's course data (assuming there is an API endpoint for it)
          fetch(`http://localhost:5000/all/userscourses/${userId}`)
            .then((courseResponse) => {
              if (!courseResponse.ok) {
                throw new Error("Course response was not ok");
              }
              return courseResponse.json();
            })
            .then((courseData) => {
              // Set the courses state with course data
              setCourses(courseData);
            })
            .catch((courseError) => {
              console.error("Error fetching user's courses: ", courseError);
            });
        })
        .catch((error) => {
          console.error("Error fetching user data: ", error);
        });
    } else {
      setUser({});
    }
  }, [userId]);

  // State variables to manage form input values
  const [name, setName] = useState(user.name || ""); // Initialize with default values
  const [email, setEmail] = useState(user.email || "");
  const [birthdate, setBirthdate] = useState(user.birthdate || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [address, setAddress] = useState(user.address || "");
  const [about, setAbout] = useState(user.about || "");

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
    fetch(`http://localhost:5000/update/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lỗi Cập nhật dữ liệu người dùng");
        }
        return response.json();
      })
      .then((data) => {
        setUser(updatedUser);
        console.log("User data updated successfully:", data);
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật dữ liệu người dùng: ", error);
      });
  };

  return (
    <div className="container text-center">
      <div className="fontuser-pro">
        <div>
          <img
            key={user.id}
            className="imgid-profile"
            src={user.imageUrl} // đường dẫn hình ảnh trong cơ sở dữ liệu
            alt={`lỗi hình ảnh ${user.id}`}
            onError={() => console.error("Lỗi tải hình ảnh.")}
          />
          <img src="./image/came.png" alt="came" className="came"></img>
          <div className="pro-textAdmin">
            <p className="pro-textone">{user.name}</p>
            <p className="pro-texttwo">{user.email}</p>
            <div className="pro-btnadone"></div>
            <div className="pro-day">
              <img src="./image/sn.png" alt="sn" className="img-pro-sn"></img>
              <p
                className="txt-daypro"
                value={user.birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              >
                {user.birthdate}
              </p>
            </div>
            <div className="btn-pro-sn"></div>
            <div className="pro-phon">
              <img
                src="./image/phonblu.png"
                alt="phonblu"
                className="img-pro-phon"
              ></img>
              <p className="txt-phonpro">{user.phone}</p>
            </div>
            <div className="btn-pro-sn"></div>
            <div className="pro-home">
              <img
                src="./image/homeblu.png"
                alt="home"
                className="img-pro-home"
              ></img>
              <p className="txt-homepro">{user.address}</p>
            </div>
            <div className="btn-pro-sn"></div>
            <p className="pro-txtad-cm">{user.about}</p>
          </div>
        </div>
      </div>

      <div className="fonttext-pro">
        <div className="pro-Mylearn">
          <p className="text-mylearn">My courses</p>
          <div className="btn-pro-one"></div>
          <div className="btn-pro-two"></div>
        </div>

        <div className="pro-list-learn">
          {courses.map((courseUser) => (
            <div className="pro-list-html" key={courseUser.id}>
              <CourseImage courseImageUrl={courseUser.imageUrl}></CourseImage>
              <p className="pro-txthtml">{courseUser.txtname}</p>
            </div>
          ))}

          <div className="pro-list-addcour">
            <a href="/allcourses" type="button">
              <img src="./image/Ellipse 32.png" alt="elip" className="add-course1"></img>
              <div className="pro-plus">
                <img src="./image/Vectorpro.png" alt="vector"></img>
              </div>
            </a>
            <p className="pro-txtaddcour">Add course</p>
          </div>
        </div>

        <div className="pro-edit-file">
          <p className="text-editpro">Edit profile</p>
          <div className="btn-pro-one"></div>
          <div className="btn-pro-two"></div>
        </div>

        <div className="list-tt">
          <div className="pro-txtname">
            <p className="txtname-pro">Name:</p>
            <input
              className="ipt-txtname"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="pro-txtemail">
            <p className="txtemail-pro">Email:</p>
            <input
              className="ipt-txtemail"
              placeholder="Your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="list-tt">
          <div className="pro-txtname">
            <p className="txtdate-pro">Date of birthday:</p>
            <input
              className="ipt-txtdate"
              placeholder="dd/mm/yyyy"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            ></input>
          </div>
          <div className="pro-txtemail">
            <p className="txtemail-pro">Phone:</p>
            <input
              className="ipt-txtemail"
              placeholder="Your address..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="list-tt">
          <div className="pro-txtname">
            <p className="txtname-pro">Address:</p>
            <input
              className="ipt-txtname"
              placeholder="Your address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div className="pro-txtemail">
            <p className="txtabout-pro">About me:</p>
            <textarea
              className="ipt-textAbme"
              placeholder="About you..."
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button className="btn-updateprofile" onClick={handleUpdate}>
          <p> Update</p>
        </button>
      </div>
    </div>
  );
}
