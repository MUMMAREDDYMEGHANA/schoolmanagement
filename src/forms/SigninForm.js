import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


export default function SigninForm(props) {
  const [values, setValues] = useState({
    email:"",
    password:"",
  });
  const history = useHistory();
  

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/dashboard");
    // TODO: sign in action
  };
  const person= {
    Emailaddress:"",
    password:"",
  }
 
  window.localStorage.setItem('user', JSON.stringify(person));
  JSON.parse(window.localStorage.getItem('user'));

 
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h2>SignIn page</h2>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setValues(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="psw"
            placeholder="Enter password"
           
            required
            onChange={(e) => setValues(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" id= "signinbutton" type="submit" onclick={person}>
            Signin
          </button>
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
