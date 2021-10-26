import React from 'react'
import {  Link} from 'react-router-dom'
import { BrowserRouter,useHistory } from 'react-router-dom';

const Header = ({setLogged, logged}) => {
    const history = useHistory();
    const signOut = () => {
        setLogged(false);
        localStorage.removeItem('logged');
        history.push("/");
      };
    return (
      <BrowserRouter>
        <header className="row">
        <div>
          <a className="brand" href="/">School Management System</a>
        </div>
        <div>
          {logged ? (
            <button onClick={signOut}>SignOut</button>

          ) : (
            <div>
            <Link to='/signin'>Signin</Link>
            <Link to='/register'>Register</Link>
            </div>  
          )}
            
        </div>
      </header>
      </BrowserRouter>
    )
}

export default Header
