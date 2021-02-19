const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

//共有属性
const base = require('./webpack.config.base.js')

//生产

module.exports = {
    ... base,
    mode: 'production', 
    plugins: [
        ... base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false,
        }),

    ],
    module: {
        rules: [
            ... base.module.rules,
            {
                test: /\.css$/i,
                use: [           //用抽成文件就用这个
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/public/path/to/',
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    }

};