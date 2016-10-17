const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './client/index.js',
    devtool: 'source-map',
    output: {
        path: `${__dirname}/build/public`,
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
