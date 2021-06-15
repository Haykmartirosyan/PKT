import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';

import cookie from 'react-cookies'

let token = cookie.load('accessToken');
const auth = {
    isLoggedIn: !!token,
};
const PrivateRoute = ({component: Component, path, ...rest}) => (
    <Route path={path}
           {...rest}
           render={props => auth.isLoggedIn ? (
               <Component {...props} />) : (<Redirect to={{
                   pathname: "/login",
                   state: {
                       prevLocation: path,
                       error: "You need to login first!",
                   },
               }}
               />
           )
           }
    />);
export default withRouter(PrivateRoute);
