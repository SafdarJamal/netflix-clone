import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../components/App';
import Movies from '../components/Movies';
import Movie from '../components/Movie';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={App} />
      <Route path="/movies" component={Movies}>
        <Route path="/movies/:id" component={Movie} />
      </Route>
    </Switch>
  );
};

export default Routes;
