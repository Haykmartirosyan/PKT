import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Login from './views/Login/Login';
import NotFound from './views/NotFound/NotFound'
import PrivateRoute from './PrivateRoute'
import Dashboard from './views/user/Dashboard/Dashboard';
import Statistics from "./views/user/Dashboard/Pkt/Statistics";

const Main = props => (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <Route path='/statistics' component={Statistics}/>
        <Route component={NotFound}/>
    </Switch>
);
export default Main;
