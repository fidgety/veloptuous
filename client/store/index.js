import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import locations from '../reducers/locations';

const serverStore = {};

const reducers = combineReducers({
    locations
});

const createStoreWithMiddleware = applyMiddleware(
    createLogger()
)(createStore);
const store = createStoreWithMiddleware(reducers, serverStore);

export default store;
