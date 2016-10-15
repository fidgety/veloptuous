import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

const reducer = () => ({});
const serverStore = {};

const reducers = combineReducers({
    reducer
});

const createStoreWithMiddleware = applyMiddleware(
    createLogger()
)(createStore);
const store = createStoreWithMiddleware(reducers, serverStore);

export default store;
