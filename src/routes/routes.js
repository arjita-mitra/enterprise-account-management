/**
 * This is the configuration file for routing.
 * 
 * author      Arjita Mitra
 */

import React from 'react';
import App from '../app/components/App';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/' component={ App }/>
                    <Redirect from='*' to='/' />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
)

export default Root