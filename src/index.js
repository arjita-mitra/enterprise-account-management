import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './routes/routes.js';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
)
registerServiceWorker();
