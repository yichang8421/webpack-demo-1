const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js',
        // path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '我de页面',
            template: 'src/assets/index.html'
        }),

    ],
};
