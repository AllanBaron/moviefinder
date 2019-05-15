import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import { Main, EmCartaz, EmBreve } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/filmes/em-cartaz" component={EmCartaz} />
      <Route path="/filmes/em-breve" component={EmBreve} />

      <Redirect from="/filmes" exact to="/filmes/em-cartaz" />
    </Switch>
  </BrowserRouter>
);

export default Router;
