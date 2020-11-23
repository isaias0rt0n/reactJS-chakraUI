import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/index';
import Form from './pages/Form/index';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/form" component={Form}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;