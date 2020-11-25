import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/index';
import Form from './pages/Form/index';
import Card from './pages/Card/index';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/form" component={Form}/>
        <Route path="/card" component={Card}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;