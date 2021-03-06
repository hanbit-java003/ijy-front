const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const utils = require('./webpack.config.utils');

const port = {
    web: 89,
    was: 8081
};

const pages = [{
    html: 'index',
    script: 'main'
}, {
    html: 'greeting',
    script: 'greeting'
}, {
    html: 'current',
    script: 'current'
}, {
    html: 'space',
    script: 'space'
}, {
    html: 'location',
    script: 'location'
}, {
    html: 'exhibitions',
    script: 'exhibitions'
}, {
    html: 'upcoming',
    script: 'upcoming'
}, {
    html: 'artist',
    script: 'artist'
}, {
    html: 'press',
    script: 'press'
}, {
    html: 'contact',
    script: 'contact'
}, {
    html: 'notice',
    script: 'notice'
}, {
    html: 'sub',
    script: 'sub'
}];

module.exports = {
    entry: utils.getEntry(pages),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].bundle.js'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                }, {
                    loader: 'less-loader'
                }]
            })
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }]
    },
    devServer: {
        contentBase: './dist',
        port: port.web,
        proxy: {
            '/api': 'http://localhost:' + port.was
        }
    },
    plugins: utils.getPlugins(pages)
};