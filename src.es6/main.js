'user strict';

import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import App, { store } from './containers/App';

const routes = (
  <Route path="/" component={App}>
    <Route path="parent1" />
    <Route path="parent2" />
  </Route>
);

render(
  <Provider store={store}>
    <ReduxRouter>
      {routes}
    </ReduxRouter>
  </Provider>,
  document.getElementById('app')
);
