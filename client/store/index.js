import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import locations from '../reducers/locations';
import route from '../reducers/route';

const serverStore = {};

const reducers = combineReducers({
    locations,
    route
});

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);
const store = createStoreWithMiddleware(reducers, serverStore);

export default store;
