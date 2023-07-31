import React , {useState} from 'react';
import './Pass.css';

export default function Pass()
{
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleResetPassword = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        setMessage('An error occurred while sending the password reset link.');
      }
    };
  

    return(
        <div className='body-resetpass'>
            <div className='container text-center resetpassHapo'>
                <form action=''>
                    <p className='resetpass'>Reset Password</p>   
                    <p className='enterpass'>Enter email to reset your password</p>       
                    <div className='form-reset-email'>
                        <p className='txtemail-reset'>Email :</p>
                        <input className='form-resetpass' type='text' 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Enter your email"></input>
                            </div>
                            <button className='txtCreate-pass btnpasslock'
                            onClick={handleResetPassword}
                            >
                                reset password
                            </button>
                            <p>{message}</p>
                </form>
            </div>
        </div>
    )
}