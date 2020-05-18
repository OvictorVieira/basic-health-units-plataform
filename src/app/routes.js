import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './pages/auth';
import Institutes from './pages/institutes';
import PrivateRoute from './privateRoutes'
import NotFound from './pages/not_found/NotFound';

function Routes() {
  debugger
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact component={ Auth }/>

        <PrivateRoute path='/institutes' component={ Institutes }/>

        <Route path="*" component={ NotFound } />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;