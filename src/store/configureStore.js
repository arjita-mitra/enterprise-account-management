import { createStore, applyMiddleware, compose } from 'redux';
//for sync
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../app/reducers/rootReducers';

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
    const store = createStore(rootReducer, enhancer);
    return store;
}