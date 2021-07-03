const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base');
// import base from './webpack.config.base';报错SyntaxError: Cannot use import statement outside a module
//     at new Script (vm.js:101:7)

module.exports = {
    ...base,
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // 查找以.css结尾的文件
                use: ["style-loader", "css-loader"],
                // css-loader将css文件读入js文件
                //     style-loader将读到的css样式放入header中
            },
        ],
    },
};
