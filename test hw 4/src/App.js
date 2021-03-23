import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';
import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage';

import routes from './routes';
import AppBar from './components/AppBar';

const App = () => (
  <Layout>
    <AppBar />

    <Switch>
      <Route exact path={routes.HOME} component={HomePage}></Route>
      <Route path={routes.MOVIES} component={MovieDetailsPage}></Route>
      <Route path={routes.SEARCH_MOVIES} component={MoviesPage}></Route>
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
