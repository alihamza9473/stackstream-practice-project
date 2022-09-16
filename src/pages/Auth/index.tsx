import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { LoginContainer } from "./containers/auth";

const AuthRoutes = ({ match: { url } }) => {
  return (
    <>
      <Switch>
        <Route path={`${url}/login`} exact component={LoginContainer} />
        <Redirect to={`${url}/login`} />
      </Switch>
    </>
  );
};

export default AuthRoutes;
