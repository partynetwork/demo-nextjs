/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { TodoPage } from './containers/TodoPage/Loadable';
import { TodoMangePage } from './containers/TodoMangePage/Loadable';
import { Pokemon } from './containers/Pokemon/Loadable';
import useSWR from 'swr/esm/use-swr';

export function App() {
  useSWR('userData', { initialData: { username: 'peeyada' } });
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route exact path={process.env.PUBLIC_URL + '/pokemon'} component={Pokemon} />
        <Route exact path={process.env.PUBLIC_URL + '/todos'} component={TodoPage} />
        <Route exact path={process.env.PUBLIC_URL + '/todos/:id'} component={TodoMangePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
