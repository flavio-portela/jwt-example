import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import Root from './components/Root';
import reducers from './reducers';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    reducers, 
    initialState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
   <Root store={store} />, 
    document.getElementById('root')
);

registerServiceWorker();
