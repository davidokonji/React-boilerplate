const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: process.env.PORT || 8080,
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            use: ['style-loader',
             'css-loader',
             'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
};
