import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: `${props.location.pathname}${props.location.search}` } }} />}
    />
  )
};

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
  ]).isRequired
};

export default PrivateRoute;