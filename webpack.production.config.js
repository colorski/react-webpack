const webpack = require('webpack');
const path = require('path');

//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production",

    entry:'./src/index.js',

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle_[hash].js',
    },

    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            }
          }
        }
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
                // use: ExtractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: "css-loader"
                // })
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },

    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.BannerPlugin('author: colorski, qq: 290518066, hash: [hash], file: [file]'),
        //new ExtractTextPlugin("styles.css"),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + "/dist/index.html",
            template: __dirname + "/template.html"
        }),
        new CleanWebpackPlugin('dist/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
    ],
}
