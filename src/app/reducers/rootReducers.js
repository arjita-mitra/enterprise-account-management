import { combineReducers } from 'redux';
import toggleSideMenuReducer from './toggleSideMenuReducer';

/**
 * List All reducers to supply combined to store
 */
export default combineReducers({
    toggleSideMenuReducer
});