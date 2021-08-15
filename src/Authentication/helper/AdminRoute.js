import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './AuthApiCalls'

const AdminRoute = ({ component: Component, ...rest }) => {
    // console.log(isAuthenticated().role)

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page 
        <Route {...rest} render={props => (
            isAuthenticated() && isAuthenticated().role === 1 ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};
export default AdminRoute