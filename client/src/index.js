import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import 'materialize-css/dist/css/materialize.min.css';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'fixed-data-table-2/dist/fixed-data-table.css'


import axios from 'axios';
window.axios = axios;

//import are handled by webpack
//data/redux setup
const store = createStore(reducers, applyMiddleware(thunk,logger));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
