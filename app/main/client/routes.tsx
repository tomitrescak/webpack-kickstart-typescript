// import ReactRouterSSR from 'react-router-ssr';
import React from 'react';
import todoRoutes from '../../TodoApp/client/routes';

import { Router, Route, IndexRoute } from 'react-router';

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

Meteor.startup(function() {
  React.render(<Router history={history} routes={[
    todoRoutes
  ]} />, document.body)

  // React.render((
  //   <Router history={history}>
  //     {todoRoutes}
  //   </Router>
  // ), document.body);
});
