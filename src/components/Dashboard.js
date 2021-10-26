import React, { useEffect } from 'react';
import { useHistory,Link,Redirect } from 'react-router-dom';
import {classes} from  '../api/classes';

function Dashboard() {
  const history = useHistory();
   useEffect(() => {
     const islogged = localStorage.getItem('logged');
     if(!islogged) history.push("/");
   }, [])
    useEffect(() => {
     const isreged = localStorage.getItem('reged');
   }, [])

   
  const onclickhandler = (event) => {
    event.preventDefault();
    history.push("/class");
  }
  return (
    <div>
        <h1>Dashboard</h1>  
        <details>  
          <summary>Student</summary>  
          <form className="form">
          <div>
          <label htmlFor="name">Student Name</label>
          <input type="text" id="name" placeholder="Enter name"></input>
          </div>
          <div>
          <label htmlFor="name">Gender</label>
          <select className="class" required="">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          </select>
          </div> 
          <div>
          <label htmlFor="name">Class</label>
          <select className="class" required="">
          <option value="">Select Class</option>
          <option value="Nursery">Nursery</option>
          <option value="LKG">LKG</option>
          <option value="UKG">UKG</option>
          <option value="One">One</option>
          <option value="Two">Two</option>
          <option value="Three">Three</option>
          <option value="Four">Four</option>
          <option value="Five">Five</option>
          <option value="Six">Six</option>
          <option value="Seven">Seven</option>
          <option value="Eight">Eight</option>
          <option value="Nine">Nine</option>
          <option value="Ten">Ten</option></select>
          </div>
          <div class="form-control"><label for="name">Age</label><input type="number" id="age" placeholder="Enter age" ></input></div>
          <div>
          <label htmlFor="name">Student Email</label>
          <input type="text" id="email" placeholder="Enter email" ></input>
          </div>
          <div>
          <label htmlFor="name">Student address</label>
          <input type="text" id="address" placeholder="Enter student address"></input></div>
          <div><button  className="primary" type="submit">Submit</button></div>
          </form>
        </details>  
        <details>  
          <summary>Teachers</summary> 
          <form className="form"> 
          <div>
          <label htmlFor="name">Teachers Name</label>
          <input type="text" id="name" placeholder="Enter name"></input>
          </div> 
          <div>
          <label htmlFor="name">Teachers Email</label>
          <input type="text" id="email" placeholder="Enter email" ></input>
          </div>
          <div>
          <label htmlFor="name">Teachers address</label>
          <input type="text" id="address" placeholder="Enter Teachers address"></input>
          </div>
          <div><button  className="primary" type="submit">Submit</button></div></form>
        </details>  
        <details>  
          <summary>Non teaching staff</summary>  
          <form className="form">
          <div>
          <label htmlFor="name">NonTeachers Name</label>
          <input type="text" id="name" placeholder="Enter name"></input>
          </div> 
          <div>
          <label htmlFor="name">NonTeachers Email</label>
          <input type="text" id="email" placeholder="Enter email" ></input>
          </div>
          <div>
          <label htmlFor="name">NonTeachers address</label>
          <input type="text" id="address" placeholder="Enter nonteaching address"></input>
          </div>
          <div><button  className="primary" type="submit">Submit</button></div></form>
        </details> 
        <details>  
        <summary>class</summary>  
        {classes.map(user => 
          <button onClick={onclickhandler}>{user.name} </button>
            )}         
        </details> 
    </div>
  );
}
export default Dashboard;