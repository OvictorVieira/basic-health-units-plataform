import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Auth from './pages/auth';
import Dashboard from './pages/dashboard';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact component={ Auth }/>

        <Route path='/dashboard' exact component={ Dashboard }/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;