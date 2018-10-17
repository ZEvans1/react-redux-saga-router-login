import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

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
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
