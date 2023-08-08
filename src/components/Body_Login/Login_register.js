import './Login_register.css';

import React, { useState, useEffect } from 'react';

export default function Login_register() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const storeToken = (token) => {
    localStorage.setItem('token', token);
  };

  const checkLoggedInStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await fetch('http://localhost:4000/api/signin/status', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request header
          },
          credentials: 'include',
        });

        if (response.ok) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
      });

      if (response.ok) {
        console.log('Sign in successful');
        const data = await response.json();
        const token = data.token;
      
        if (token) {
          // Save the JWT token in localStorage
          storeToken(token);
          console.log('Sign in successful');
          setLoggedIn(true);
          const userResponse = await fetch('http://localhost:4000/api/users', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request header
          },
          credentials: 'include',
        });
        if (userResponse.ok) {
          const users = await userResponse.json();
          const currentUser = users.find((user) => user.username === username);
          if (currentUser) {
            localStorage.setItem('userId', currentUser.id);
          }
        }
          setLoggedIn(true);
          window.location.href = '/';
        }
      } else if (response.status === 401) {
        console.log('Invalid username or password');
      } else {
        console.log('An error occurred');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/signout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        console.log('Sign out successful');
        setLoggedIn(false);

        localStorage.removeItem('token');
        localStorage.removeItem('userId'); // xoá thông tin user khỏi profile
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bodyLogin">
      <div className="container text-center loginSigninHapo">
        <div className="row">
          <div className="col-md">
            <form className='form-loginlist'>
              <p className="sign">{isLoggedIn ? 'Sign out of HapoLearn' : 'Sign in to HapoLearn'}</p>

              <div className="form-user">
                <p className="txtUser">Username</p>
                <input
                  className="form-ip"
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-pass">
                <p className="txtPassword_signin">Password</p>
                <input
                  className="form-pa"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {isLoggedIn ? (
                <button className="btnSign" type="button" onClick={handleSignOut}>
                  <p className="txtBtsign">Sign out</p>
                </button>
              ) : (
                <button className="btnSign" type="submit" onClick={handleSignIn}>
                  <p className="txtBtsign">Sign in</p>
                </button>
              )}

              <div className="forgot">
                <a href="/resetpassword">
                  <p className="txtForgot">Forgot password</p>
                </a>
              </div>
              <div className="btnIndex"></div>
              <div className="btnIndex2"></div>
              <p className="txtIn"> Sign in with</p>
              <button className="btnGoogle">
                <img src="./image/Google.png" alt="Google logo" />
                <p className="txtGoogle"> Google</p>
              </button>
              <div className="btnNew"></div>
              <div className="btnNew2"></div>
              <p className="txtOr">or New to HapoLearn</p>

              <a href="/signup" className="txtCreate btnCreat" type="button">
                Create New Account
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}