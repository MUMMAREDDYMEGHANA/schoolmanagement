import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 
export default function RegisterForm({setReged}) {
  const [name, setname] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [EmailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);  
  const [nameIsTouched, setnameIsTouched] = useState(false);
  const [confirmpasswordIsTouched, setconfirmPasswordIsTouched] = useState(false);
  const validname =  name.trim() !== '';
  const invalidname =  name.trim() === '' && nameIsTouched;
  const validEmail =  Email.trim() !== '';
  const invalidEmail =  Email.trim() === '' && EmailIsTouched;
  const validPassword = password.trim() !== '';
  const invalidPassword = password.trim() === '' && passwordIsTouched;
  const validconfirmPassword = confirmPassword.trim() !== '';
  const invalidconfirmPassword = confirmPassword.trim() === '' && confirmpasswordIsTouched;

  let formIsValid = false;
    if (validEmail && validPassword && validname && validconfirmPassword) {
    formIsValid = true;
    } else {
    formIsValid = false;
  }
  const nameChangeHandler = (event) => {
        setname(event.target.value);
  }
  const nameBlurHandler = (event) => {
        setnameIsTouched(true);
  }
  const EmailChangeHandler = (event) => {
        setEmail(event.target.value);
  }
  const EmailBlurHandler = (event) => {
    setEmailIsTouched(true);
  }
  const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }
  const passwordBlurHandler = (event) => {
        setPasswordIsTouched(true);
    }
  const confirmPasswordChangeHandler = (event) => {
        setconfirmPassword(event.target.value);
    }
  const confirmPasswordBlurHandler = (event) => {
        setconfirmPasswordIsTouched(true);
    }
  const submitHandler = (event) => {
      event.preventDefault();
      setReged(true);
      window.localStorage.setItem('reged', true);
      if (password !== confirmPassword) {
        alert('Password and confirm Password are not match');
      } else {
      alert('Registration success');
      }
      if (!validEmail && !validPassword && !validname && !validconfirmPassword) {
        return;
      }
      console.log(name);
      console.log(Email);
      console.log(password);
      console.log(confirmPassword);
    }
 
  return (
    <div>
    <form className="form" onSubmit={submitHandler} >
        <div>
          <h3>RegistrationForm</h3>
        </div>
         <div>
                <label>Name</label>
                <input type="text" onChange={nameChangeHandler} onBlur={ nameBlurHandler} value={ name}/>
                {invalidname && (
                <p className="errorText">please enter valid name</p>
            )}
          </div>
          <div>
                <label>Email</label>
                <input type="text" onChange={ EmailChangeHandler} onBlur={ EmailBlurHandler} value={ Email}/>
                {invalidEmail && (
                <p className="errorText">please enter valid Email</p>
            )}
          </div>
          <div>
                <label>Password</label>
                <input type="password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler} value={password} />
                {invalidPassword && (
                <p className="errorText">please enter valid Password</p>
            )}
          </div>
          <div>
                <label>confirmPassword</label>
                <input type="password" onChange={confirmPasswordChangeHandler} onBlur={confirmPasswordBlurHandler} value={confirmPassword} />
                {invalidconfirmPassword && (
                <p className="errorText">please enter previous Password</p>
            )}
            </div>
        <div>
          <label />
          <button  disabled={ !name || !Email || !password || !confirmPassword} className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to="/signin">Sign-In</Link>
          </div>
        </div>
        </form>
    </div>
  );
}