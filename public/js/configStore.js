/**
 * Created by fiddlest on 2016-08-26.
 */

import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import createLogger from 'redux-logger';
import Reducers from './Reducers' ;

const loggerMiddleware  = createLogger();
let initialState = window.__PRELOADED_STATE__;
const store = createStore(
    Reducers,
    initialState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);


export default store;