import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main, EmCartaz, EmBreve } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/em-cartaz" component={EmCartaz} />
      <Route path="/em-breve" component={EmBreve} />
    </Switch>
  </BrowserRouter>
);

export default Router;
