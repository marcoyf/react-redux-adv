// command to install Redux and intregrate it with React: npm install --save redux react-redux

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// command to install Redux Thunk: npm install --save redux-thunk
// Redux Thunk is a library that adds a middleware which allows actions creators to not return the Action itself but 
// return a function which will eventually dispatch an Action, which allows us to run asynchronous code
import thunk from 'redux-thunk';

// using a single Reducer
// import reducer from './store/reducer';

// using multiple Reducers
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// using a single Reducer
// const store = createStore(reducer);

// middleware
// right between the Action being dispatched and reaching the Reducer
// this way we can do something to the Action before it reaches the Reducer, for example logging something
const logger = store => {
  return next => {
      return action => {
          console.log('[Middleware] Dispatching', action);
          const result = next(action);
          console.log('[Middleware] next state', store.getState());
          return result;
      }
  }
};

// used by Redux DevTools browser extension to inform the browser extension that there's a store in this web app
// instructions: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
// if it can't be found, Redux will provide a default compose function as a fallback which doesn't give Redux DevTools support
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// using multiple Reducers combined
// applying the middleware to the store
// the method applyMiddleware can receive a list of middlewares
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
