import React from 'react';
import ReactDOM from 'react-dom';
import classes from  './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import { quotes } from './store/reducers/quote';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const rootReducer = combineReducers({
    random:quotes
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (<Provider store={store}>
                <App body={classes.body}/>
            </Provider>)

ReactDOM.render(app, document.getElementById('quote-box'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
