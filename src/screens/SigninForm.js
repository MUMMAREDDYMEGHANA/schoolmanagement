import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import './signin.css';


export default function SigninForm({setLogged}) {
  const [Emailaddress, setEmailaddress] = useState('');
  const [password, setPassword] = useState('');
  const [EmailaddressIsTouched, setEmailaddressIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const history = useHistory();
  const validEmailaddress =  Emailaddress.trim() !== '';
  const invalidEmailaddress =  Emailaddress.trim() === '' && EmailaddressIsTouched;
  const validPassword = password.trim() !== '';
  const invalidPassword = password.trim() === '' && passwordIsTouched;
 

  let formIsValid = false;
    if (validEmailaddress && validPassword) { 
    formIsValid = true;
    } else {
    formIsValid = false;
  }

  const EmailaddressChangeHandler = (event) => {
        setEmailaddress(event.target.value);
  }
  const EmailaddressBlurHandler = (event) => {
        setEmailaddressIsTouched(true);
  }
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }
    const passwordBlurHandler = (event) => {
        setPasswordIsTouched(true);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        setLogged(true);
        window.localStorage.setItem('logged', true);
        history.push("/dashboard");
        if (!validEmailaddress && !validPassword) {
            return;
         }
        console.log(Emailaddress);
        console.log(password);
     
        
    }
 
 
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>SignIn page</h2>
        </div>
         <div>
                <label>Emailaddress</label>
                <input type="text" onChange={ EmailaddressChangeHandler} onBlur={ EmailaddressBlurHandler} value={ Emailaddress}/>
                {invalidEmailaddress && (
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
          <label />
           <div>
                <button type="submit" disabled={ !Emailaddress || !password } className="primary">Signin</button>
            </div>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}