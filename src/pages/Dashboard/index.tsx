import { Redirect, Route, Switch } from "react-router-dom";

// import { SuperAdminDashboardContainer, EmployeeDashboardContainer } from 'pages/Dashboard/containers';
// import AppLayout from 'layout/AppLayout';
// import React from 'react';
// import { getUser } from 'utils/user';

const AuthRoutes = ({ match: { url } }) => {
  return (
    <>
      Hwllo
      {/* <Switch>
        <Route path={`${url}/`} exact render={() => <> HEllo</>} />
        <Redirect to={`${url}/`} />
      </Switch> */}
    </>
  );
};

export default AuthRoutes;

const DashbaordHOC = ({ ...rest }) => {
  // const userData = getUser();

  return (
    <></>
    // userData?.user?.role[0] === 'super admin' ?  <SuperAdminDashboardContainer {...rest} /> : <EmployeeDashboardContainer {...rest} />
  );
};
