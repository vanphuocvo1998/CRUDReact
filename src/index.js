import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//store
import {createStore, applyMiddleware, compose} from 'redux';
import appReducers from './reducers/index';
//provider
import {Provider} from 'react-redux';

// asyn function
import thunk from "redux-thunk";


const store = createStore(
  appReducers,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)

);

// const store = createStore(
//   appReducers,
//   compose(
//       applyMiddleware(thunk),
//       window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   )    
// );

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );

serviceWorker.unregister();
