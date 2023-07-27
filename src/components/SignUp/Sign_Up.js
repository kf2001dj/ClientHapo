import React, { useState } from 'react';

import './Sign_Up.css';

export default function Sign_Up() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  //showpass
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu xác nhận không khớp');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });

      if (response.ok) {
        console.log('Đăng ký thành công');
        // Xử lý phản hồi từ API ở đây
        // Ví dụ: chuyển hướng đến trang đăng nhập
        window.location.href = '/loginregister';
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Đã xảy ra lỗi trong quá trình đăng ký');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Đã xảy ra lỗi trong quá trình đăng ký');
    }
  };

  return (
    <div className="body-signup">
      <div className="container text-center login_signupHapo">
        <div className="row">
          <div className="col-md">
            <form>
              <p className="signup">Sign up to HapoLearn</p>

              <div className="form-user-signup">
                <p className="txtUser-signup">Username</p>
                <input
                  className="form-ipup"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-email">
                <p className="txtemail_signup">Email</p>
                <input
                  className="form-email-signup"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-passup">
                <p className="txtpass_signup">Password</p>
                <input
                  className="form-passup-signup"
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span  className='showcodepass' onClick={handleTogglePassword}>{passwordVisible ? 'Ẩn' : 'Hiện'}</span>
              </div>

              <div className="form-comfirm">
                <p className="txtcomfirm_signup">Confirm Password</p>
                <input
                  className="form-comfig-signup"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {errorMessage &&
               <p className="error-message">{errorMessage}</p>
              }

              <button
                className="txtCreate-signup btnsignuplock"
                type="button"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
