import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { addMarker } from './actions.js';
import rootReducer from './reducer.js';
import { logger } from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

export default store;
