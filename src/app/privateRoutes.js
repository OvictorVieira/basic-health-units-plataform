import React from 'react'
import { isAuthenticated } from './pages/auth/AuthValidations'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const isLoggedIn = isAuthenticated();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
};

export default PrivateRoute;