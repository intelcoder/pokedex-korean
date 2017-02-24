/**
 * Created by fiddlest on 2016-07-28.
 */
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname ,'public', 'index.bundle.js'),
    watch:true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: { presets: ['es2015', 'stage-0', 'react']}
            }
        ]
    },
    output: {filename: 'index.bundle.js', path: __dirname + '/public'}
};