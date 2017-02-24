/**
 * Created by fiddlest on 2016-07-28.
 */

'use strict'

import React from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {Router, match} from 'react-router';
import routes from './js/routes';
import store from './js/configStore';
import createBrowserHistory from 'history/lib/createBrowserHistory';


const history =createBrowserHistory();
match({ history, routes }, (error, redirectLocation, renderProps) => {

    ReactDom.render(
        <Provider store={store}  >
            <Router {...renderProps} />
        </Provider> , document.getElementById('app'))
});
