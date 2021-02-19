const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

//把base导引过来
const base = require('./webpack.config.base.js')

//开发

module.exports = {
    //把base所有属性写过来
    ... base,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },   
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"] //如果用style文件就用这个
            }
        ]
    }

};