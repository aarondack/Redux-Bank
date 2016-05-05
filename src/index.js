import React from 'react';
import bankApp from './reducers/reducers.js';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';

const store = createStore(bankApp);

render(
  <Provider store={store}>
      <App />
  </Provider>,
    document.getElementById('app')
);
