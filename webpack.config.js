var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './es6_js/app.js',
    output: {
        path: __dirname+'/es6_js',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};
