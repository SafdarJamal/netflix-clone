import React from 'react';
import { Route } from 'react-router-dom';

import App from '../components/App';
import Movies from '../components/Movies';
import Movie from '../components/Movie';

const Routes = () => {
  return (
    <>
      <Route path="/" component={App} exact />
      <Route path="/movies/:id" component={Movies} />
      <Route path="/movies/:id" component={Movie} />
    </>
  );
};

export default Routes;
