import React, { useState } from 'react';

// import Navbar from '../../Navbar/Navbar';
// import Footer from '../../Footer/Footer';
const Resetpass = (props) => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdatePassword = async () => {
    try {
      const { token } = props.match.params;
      const response = await fetch('/api/update-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('An error occurred while updating the password.');
    }
  };

  return (
    <div>
        <>
            {/* <Navbar></Navbar> */}
            <div className='body-resetpass'>
                <div className='container text-center resetpassHapo'>
                    <div className='row'>
                        <div className='col-md'>
                            <form action=''>
                                <p className='resetpass'>Reset Password</p>   
                                <p className='enterpass'>Enter email to reset your password</p>       
                                <div className='form-reset-email'>
                                    <p className='txtemail-reset'>Email :</p>
                                    <input className='form-resetpass'
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your new password"
                                ></input>
                                </div>
                                <button className='txtCreate-pass btnpasslock'
                                onClick={handleUpdatePassword}
                                >
                                    reset password
                                </button>
                                <p>{message}</p>
                            </form>
                        </div>
                    </div>
                </div>
             </div>

            {/* <Footer></Footer> */}
        </>        


       
    </div>
  );
};

export default Resetpass;