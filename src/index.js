import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router } from 'react-router-dom';

import reducer from './reducers';
import Saga from './sagas';
import App from './components/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer, 
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(Saga);

render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>, document.getElementById('root')
)
