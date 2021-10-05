import React, { useState } from 'react';
import SigninForm from './forms/SigninForm';
import RegistrationForm from './forms/RegistrationForm';
import { BrowserRouter ,Route, Link} from 'react-router-dom';
import './forms/style.css';
import Dashboard from './forms/Dashboard';
import Header from './Header';
 
function App() {
  const [logged, setLogged] = useState(false);
  
  return (
    <BrowserRouter>
    <div className="grid-container">
     <Header setLogged={setLogged} logged={logged}/>
      <main>
        <Route path = "/signin" component = {() => <SigninForm setLogged={setLogged}/>}></Route>
        <Route path = "/register" component = {RegistrationForm}></Route>
        <Route path = "/dashboard" component = {() => <Dashboard logged={logged}/>}></Route>
      </main>
      <footer className="footer" >All Rights are Reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}
 
export default App;