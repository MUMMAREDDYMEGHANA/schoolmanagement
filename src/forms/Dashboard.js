import React from 'react';
 
function Dashboard() {
    const isSignedIn = true;
  return (
     <div>
      {/* show the logout button if the user is logged in */}
      {isSignedIn && <a href="/signout">Signout</a>}

    </div>
  
  );
}
export default Dashboard;