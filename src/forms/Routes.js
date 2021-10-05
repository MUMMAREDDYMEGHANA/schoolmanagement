import React from 'react'
import { Switch ,Route} from 'react-router-dom';
import SigninForm from './SigninForm';
import RegistrationForm from './RegistrationForm';
import Dashboard from './Dashboard';
import Signout from './Signout';

function  Routes() {
    return (
    <Switch>
        <Route path = "/signin" component = {SigninForm}></Route>
        <Route path = "/register" component = {RegistrationForm}></Route>
        <Route path = "/dashboard" component = {Dashboard}></Route>
        <Route path = "/signout" component = {Signout}></Route>
    </Switch>
    )
}
export default Routes;
