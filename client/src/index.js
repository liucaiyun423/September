import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import 'materialize-css/dist/css/materialize.min.css';
import thunk from 'redux-thunk';

//import are handled by webpack


//data/redux setup
const store = createStore(reducers,{}, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

