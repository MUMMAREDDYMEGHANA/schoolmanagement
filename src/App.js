import React, { useState } from 'react';
import SigninForm from './screens/SigninForm';
import RegistrationForm from './screens/RegistrationForm';
import { BrowserRouter ,Route} from 'react-router-dom';
import './components/style.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
 
function App() {
  const [logged, setLogged] = useState(false);
  const [reged, setReged] = useState(false);  
  return (
    <BrowserRouter>

    <div className="grid-container">
     <Header setLogged={setLogged} logged={logged}  reged={reged} setReged={setReged}/>
      <main>
        <Route path = "/signin" component = {() => <SigninForm setLogged={setLogged}/>}></Route>
      <Route path = "/register" component = {() => <RegistrationForm setReged={setReged}/>}></Route>
        <Route path = "/dashboard" component = {() => <Dashboard logged={logged} reged={reged} />}></Route>
      </main>
    </div>
      <footer className="footer" >All Rights are Reserved
      </footer>
    </BrowserRouter>
  );
}
 
export default App;