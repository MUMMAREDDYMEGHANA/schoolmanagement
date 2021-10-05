import React from 'react';
import SigninForm from './forms/SigninForm';
import RegistrationForm from './forms/RegistrationForm';
import { BrowserRouter ,Route, Link} from 'react-router-dom';
import './forms/style.css';
import Dashboard from './forms/Dashboard';
import Signout from './forms/Signout';
 
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
     <header className="row">
        <div>
          <a className="brand" href="/">School Management System</a>
        </div>
        <div>
          <Link to='/signin'>Signin</Link>
          <Link to='/register'>Register</Link>    
        </div>
      </header>
      <main>
        <Route path = "/signin" component = {SigninForm}></Route>
        <Route path = "/register" component = {RegistrationForm}></Route>
        <Route path = "/dashboard" component = {Dashboard}></Route>
      </main>
      <footer className="footer" >All Rights are Reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}
 
export default App;