The use of webpack for react.

## 1.webpack.config.js
```
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

```
## Plugins
```
1.new webpack.BannerPlugin('版权或者版本信息！')  
在打包后的bundle.js里头部添加一些信息，如版权或版本信息；

2.mini-css-extract-plugin 
还没用明白 删除了，用的3

3.extract-text-webpack-plugin
从js文件中分离出独立的css文件
https://www.npmjs.com/package/extract-text-webpack-plugin

4.UglifyJsPlugin  
压缩js代码，在webpack@4已经不需要了，直接在package.json里打包webpack的地方声明一下mode是生产模块即可：
"scripts": {
  "dist": "webpack --mode production",
},

5.Hot Module Replacement
热加载

6.html-webpack-plugin
依据一个模版生成新的html文件，并把处理后的文件放入到对应html里，这对加入hash的文件很有用。
https://www.npmjs.com/package/html-webpack-plugin

7.clean-webpack-plugin
把6.html-webpack-plugin生成的文件进行清理
https://www.npmjs.com/package/clean-webpack-plugin


```