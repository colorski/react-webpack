const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: "development",

    devServer:{
        contentBase:path.join(__dirname, "./"),
        host:'localhost',
        compress:true,
        inline:true,
        port:3030
    },

    entry:'./src/index.js',

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'temp/'
    },
    
    module: {
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                query:{
                    presets:['env','react']
                }
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
        new webpack.BannerPlugin('版权或者版本信息！'),
        new ExtractTextPlugin("styles.css"),
    ],

    //用这个是方便调试，但是不用会大大压缩打包的代码量
    //devtool: 'eval-source-map'
}
