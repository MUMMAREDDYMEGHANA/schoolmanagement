import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 
export default function RegisterForm({setReged}) {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [EmailIsTouched, setEmailIsTouched] = useState(false);
  const [PasswordIsTouched, setPasswordIsTouched] = useState(false);  
  const [nameIsTouched, setnameIsTouched] = useState(false);
  const [confirmpasswordIsTouched, setconfirmPasswordIsTouched] = useState(false);
  const validName =  Name.trim() !== '';
  const invalidName =  Name.trim() === '' && nameIsTouched;
  const validEmail =  Email.trim() !== '';
  const invalidEmail =  Email.trim() === '' && EmailIsTouched;
  const validPassword = Password.trim() !== '';
  const invalidPassword = Password.trim() === '' && PasswordIsTouched;
  const validconfirmPassword = confirmPassword.trim() !== '';
  const invalidconfirmPassword = confirmPassword.trim() === '' && confirmpasswordIsTouched;

  let formIsValid = false;
    if (validEmail && validPassword && validName && validconfirmPassword) {
    formIsValid = true;
    } else {
    formIsValid = false;
  }
  const nameChangeHandler = (event) => {
        setName(event.target.value);
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
      if (Password !== confirmPassword) {
        alert('Password and confirm Password are not match');
      } else {
      alert('Registration success');
      }
      if (!validEmail && !validPassword && !validName && !validconfirmPassword) {
        return;
      }
      console.log(Name);
      console.log(Email);
      console.log(Password);
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
                <input type="text" onChange={nameChangeHandler} onBlur={nameBlurHandler} value={ Name}/>
                {invalidName && (
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
                <input type="password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler} value={Password} />
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
          <button  disabled={ !Name || !Email || !Password || !confirmPassword} className="primary" type="submit">
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