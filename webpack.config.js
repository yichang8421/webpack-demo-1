const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js',
        // path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        title: '我de页面',
        template: 'src/assets/index.html'
    })],
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
