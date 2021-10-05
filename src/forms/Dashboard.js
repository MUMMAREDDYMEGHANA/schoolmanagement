import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
 
function Dashboard() {

  const history = useHistory();
   useEffect(() => {
     const islogged = localStorage.getItem('logged');
     if(!islogged) history.push("/");
   }, [])
  return (
     <div>
      {/* show the logout button if the user is logged in */}
      {/* {isSignedIn && <a href="/signout">Signout</a>} */}
    Dashboard
    </div>
  
  );
}
export default Dashboard;