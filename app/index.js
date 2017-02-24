/**
 * Created by fiddlest on 2016-07-28.
 */
'use strict'

import express from 'express';
import winston from 'winston';
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { match, RouterContext, Route  } from 'react-router';
import { Provider } from 'react-redux'
//Api
import pokemon from './pokemon/index';
//React
import Reducers from '../public/js/Reducers';
import routes from '../public/js/routes';

const app = express();
const mongoose = require('mongoose');
app.use('/static', express.static('public'));

app.use('/api/pokemon',pokemon);

function renderFullPage(html, preloadedState) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Pokemon App</title>
         <link rel="stylesheet" type="text/css" href="/static/style/index.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
        <div id="app"><div>${html}</div></div>
        <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="https://npmcdn.com/jquery@3.1.0"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
        <script src="/static/index.bundle.js"></script>
    </body>
    </html>
    `
}

app.get('/*',(req,res)=>{
    match({ routes:routes, location: req.originalUrl  }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            const store =  createStore(Reducers);
            const html = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );
            res.status(200).send(renderFullPage(html, store.getState()));
        } else {
            res.status(404).send('Not found')
        }
    })
});


const option =  { server: { reconnectTries: Number.MAX_VALUE },promiseLibrary: require('bluebird') };
let url = require('./config/db.config.js').mongoose.url;

mongoose.connect(url, option, (err) => {
    if (err) {
        return console.log('Fail to connect mongodb. Error Message: ', err.Error)
    }

    const server = app.listen(9000, () => {
        let port = server.address().port;
        winston.info(`Server running at http://localhost:${port}`);
    });
});




