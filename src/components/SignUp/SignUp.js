
import { Link } from 'react-router-dom';
import './SignUp.css';
import img from '../../images/Google_Logo.svg.png';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
 
    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your two password didn't match");
            return;
        }
        if(password.length < 6){
            setError('Password must 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

   

    return (
        <div className='form-container'>
            <div className='login-form'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' required />
                    </div>
                    <p className='text-danger text-center'> 
                        {error} 
                    </p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
                <div className=''>
                    <div className='alternative-line'>or</div>
                </div>
                <button className='submit-google-btn' type="submit"> <img src={img} alt='Google' /> Continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;