import react from 'react';
import SigninForm from './forms/SigninForm';
import RegisterForm from './forms/RegisterForm';
import { Route, Link} from 'react-router-dom';
import './forms/style.css';
import Demo from './forms/demo';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">School Management System</a>
        </div>
        <div>
          <Link to='/signin'>Sign In</Link>
          <Link to='./register'>Register</Link>
        </div>
      </header>
      <main>
        <Route path = "/signin" component = {SigninForm}></Route>
        <Route path = "/register" component = {RegisterForm}></Route>
        <Route path = "/demo" component = {Demo}></Route>
      </main>
      <footer>All Rights are Reserved</footer>
    </div>
  );
}

export default App;
