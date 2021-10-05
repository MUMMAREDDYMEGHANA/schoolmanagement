import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm(props) {
  const [name, setName] = useState(() => {
  // getting stored value
  const saved = localStorage.getItem("name");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    
 
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm Password are not match');
    } else {
     alert('Registration success');

    }
  }

 useEffect(() => {
  localStorage.setItem("user", JSON.stringify(name));
  localStorage.setItem("email", JSON.stringify(email));
  localStorage.setItem("password", JSON.stringify(password));
}, [name,email,password]); 



  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h3>RegistrationForm</h3>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
           
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="button"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" id= "signupbutton" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
