const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base');

module.exports = {
    ...base,
    mode: "production",
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            // all options are optional
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                // 查找以.css结尾的文件
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "css-loader",
                ],
            },
        ],
    },
};
