import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './pages/auth';
import Institutes from './pages/institutes';
import PrivateRoute from './privateRoutes'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact component={ Auth }/>

        <PrivateRoute path='/institutes' component={ Institutes }/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;