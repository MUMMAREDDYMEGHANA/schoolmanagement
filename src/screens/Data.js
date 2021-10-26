import {classes} from  '../api/classes';

const Data = () =>{
    return(
        <div>
        {classes.map(user => 
            <li>{user.students} </li>
        )} 
        </div>

    )

}
export default Data;