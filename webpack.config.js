const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = process.env.WEBPACK_ENV === 'dev' ? '/public' : '/build/public';

const config = {
    entry: './client/index.js',
    devtool: 'source-map',
    output: {
        path: `${__dirname}${path}`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /client.*\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                // activate source maps via loader query
                'css?sourceMap!' +
                'sass?sourceMap&' +
                'includePaths[]=' +
                './client/sass-modules')
        }]
    },
    plugins: [
        new ExtractTextPlugin('./styles.css')
    ]
};

module.exports = config;
