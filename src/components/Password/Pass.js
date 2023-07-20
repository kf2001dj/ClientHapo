import React from 'react';
import './Pass.css';
export default function Pass()
{
    return(
        <div className='body-resetpass'>
            <div className='container text-center resetpassHapo'>
                <div className='row'>
                    <div className='col-md'>
                        <form action=''>
                            <p className='resetpass'>Reset Password</p>   
                            <p className='enterpass'>Enter email to reset your password</p>       
                            <div className='form-reset-email'>
                                <p className='txtemail-reset'>Email :</p>
                                <input className='form-resetpass' type='text'></input>
                            </div>
                            <a href='/' className='txtCreate-pass btnpasslock' type='button'>
                                reset password
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}