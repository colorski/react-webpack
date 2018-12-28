const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "development",

    devServer:{
        contentBase:path.join(__dirname, "./"),
        host:'localhost',
        compress:true,
        inline:true,
        port:3030,
        hot: true
    },

    entry:'./src/index.js',

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle_[hash].js',
    },
    
    module: {
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.BannerPlugin('author: colorski, qq: 290518066, hash: [hash], file: [file]'),
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            filename: __dirname + "/dist/index.html",
            template: __dirname + "/src/template.html"
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + "/index.html",
            template: __dirname + "/src/template.html"
        }),
        new CleanWebpackPlugin('dist/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
    ],
}
