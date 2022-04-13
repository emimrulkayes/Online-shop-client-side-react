import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import img from'../../images/Google_Logo.svg.png';

const Login = () => {
    return (
        <div className='form-container'>
            <div className='login-form'>
                <h2 className='form-title'>Login </h2>
                <form>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" name='email' id='' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name='password' id='' />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Online-Shop? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className=''>
                    <div className='alternative-line'>or</div>
                </div>
                <button className='submit-google-btn' type="submit"> <img src={img} alt='Google' /> Continue with google</button>
            </div>
        </div>
    );
};

export default Login;