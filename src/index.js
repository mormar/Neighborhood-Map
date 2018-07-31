import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import {combineReducers} from 'redux';
// import reducer from './reducer';
// import ActivPlace from './ActivPlace';
// import Search from './Search';
// import Map from './Map';
import { createStore } from 'redux';
import { addMarker } from './actions.js';
import rootReducer from './reducer.js';

const store = createStore(rootReducer);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

export default store;

// const allReducers = combineReducers ({
//   data: reducer,
//   activePlace: ActivPlace
// });
// const store = createStore(allReducers);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , document.getElementById('root'));
// registerServiceWorker();
