import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import * as Pages from '../pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Pages.Main} />
      <Redirect from="/filmes" exact to="/filmes/em-cartaz" />
      <Route exact path="/filmes/em-cartaz" component={Pages.SectionReleased} />
      <Route exact path="/filmes/em-breve" component={Pages.SectionCommingSoon} />
      <Route component={Pages.NoMatchPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
