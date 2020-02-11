import React from 'react';
import { Route } from 'react-router-dom';

import Movies from '../components/Movies';
import Movie from '../components/Movie';

const Routes = () => {
  return (
    <>
      <Route path="/" component={Movies} exact />
      <Route path="/movies" component={Movies} />
      <Route path="/movies/:id" component={Movie} />
    </>
  );
};

export default Routes;
