/**
 * This is the configuration file for routing.
 * 
 * author      Arjita Mitra
 */

import React from 'react';
import App from '../app/components/App';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={ App }/>
            </div>
        </BrowserRouter>
    </Provider>
)

export default Root