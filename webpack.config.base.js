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
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', 'stylus-loader'],
            },
            {
                test: /\.less$/i,
                loader: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ],
            },
        ],
    },

};