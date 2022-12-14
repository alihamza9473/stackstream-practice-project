import React, { useEffect } from "react";
import { getSession, initSession } from "utils/user";

import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
// import { infoAction } from 'state/actions/user';
import history from "utils/history";

/**
 * PrivateRoute is used to support the react router and it renders the routes
 * which is marked as private or is only accessible authenticated users
 * @param {React.Component} component
 */
const PrivateRoute = ({ component, ...rest }) => {
  const { defaultPath } = rest;

  const isAuthenticated = !!getSession();
  useEffect(() => {
    if (isAuthenticated) {
      initSession();
    } else {
      console.log("private route hits");
      history.push(`/auth/login`);
      return;
    }
  }, [isAuthenticated]);

  const routeComponent = (props) =>
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/auth/login" }} />
    );

  return <Route {...rest} render={routeComponent} pageTitle="" />;
};

const mapProps = (state: any) => {
  return {};
};

export default connect(mapProps, {})(PrivateRoute);
