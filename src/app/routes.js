import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Auth from './pages/auth';
import Institutes from './pages/institutes';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact component={ Auth }/>

        <Route path='/institutes' exact component={ Institutes }/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;