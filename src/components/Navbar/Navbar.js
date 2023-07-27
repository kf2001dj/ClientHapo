import { useState ,useEffect } from 'react';

import React  from 'react';
import '../Navbar/Navbar.css';

export default function Navbar() {
  const [selectedNavOption, setSelectedNavOption] = useState('');
  const [isEventHandled, setEventHandled] = useState(false);
  useEffect(() => {
    // Get the current URL path
    const path = window.location.pathname;

    // Determine the selected navigation option based on the path
    if (path === '/') {
      setSelectedNavOption('home');
    } else if (path === '/allcourses') {
      setSelectedNavOption('all');
    } else if (path === '/loginregister') {
      setSelectedNavOption('login');
    } else if (path === '/profile') {
      setSelectedNavOption('pro');
    }
  }, []);

  const handleOptionClickNav = (option) => {
    if (!isEventHandled) {
      setSelectedNavOption(option);
      setEventHandled(true);
    }
  };
  useEffect(() => {
    setEventHandled(false);
  }, [selectedNavOption]);

    return ( 
        <nav class="navbar navbar-expand-lg  navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src='./image/Hapo_Learn.png' className='imgNavhapo' alt='logo'></img>
          </a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
              <span class="toggler-icon top-bar"></span>
              <span class="toggler-icon middle-bar"></span>
              <span class="toggler-icon bottom-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-4 mb-lg-0">
              <div className='fontVien'>
            </div></ul>
            <form class="d-flex">  
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-right">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" type='button' href='/'
                      className={`nav-link ${selectedNavOption === 'home' ? '' : ''}`}
                      onClick={(e) =>{ 
                        e.preventDefault();
                        handleOptionClickNav('home')}}
                  >HOME

                  </a>
                </li>
                <li class="nav-item ">
                     <a class="nav-link"  type='button'
                      href="/allcourses"
                     className={`nav-link ${selectedNavOption === 'all' ? 'selected' : ''}`}
                      onClick={(e) => {
                        e.preventDefault(); //tránh load lại trang 
                        handleOptionClickNav('all')}}
                    >
                    ALL COURSES
                    </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  type='button'
                      href="/loginregister" 
                      className={`nav-link ${selectedNavOption === 'login' ? 'selected' : ''}`}
                      onClick={(e) =>{ 
                        e.preventDefault();
                        handleOptionClickNav('login')} }
                  >LOGIN/REGISTER
                     
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" type='button'
                      href="/profile"  
                      className={`nav-link ${selectedNavOption === 'pro' ? 'selected' : ''}`}
                      onClick={(e) => { 
                        e.preventDefault();
                        handleOptionClickNav('pro')} }
                  >PROFILE</a>
                </li> 
              </ul>
              {selectedNavOption === 'home' &&
               <div className='btn-blue-navhome'>
                  <a href='/'>
                    <p>HOME</p>
                  </a>
               </div>
              }
              {selectedNavOption === 'all' && 
              <div className='btn-blue-navall'>
                  <a href='/allcourses'>
                    <p>ALL COURSES</p>
                  </a>
               </div>
              }
              {selectedNavOption === 'login' && 
                <div className='btn-blue-navlog'>
                    <a href='/loginregister'>
                      <p>LOGIN/REGISTER</p>
                    </a>
                </div>
              }
              {selectedNavOption === 'pro' && 
                <div className='btn-blue-navpro'>
                    <a href='/profile'>
                      <p>PROFILE</p>
                    </a>
                </div>
              }
            </form>
            <div className='fontVien2'></div>
          </div>


        </div>
      </nav>
    )
}