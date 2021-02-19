const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

//共有属性

module.exports = { 
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '熊熊',
            template: 'src/assets/index.html'
        }),
    ]

};