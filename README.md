The use of webpack@4 for react. It contains the basic config, some usefull plugins, and some points for optimization;
The use of react-router@4 - react-router-dom. 

## webpack.config.js
```
const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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

    // optimization: {
    //     splitChunks: {
    //       cacheGroups: {
    //         styles: {
    //           name: 'styles',
    //           test: /\.css$/,
    //           chunks: 'all',
    //           enforce: true
    //         }
    //       }
    //     }
    // },
    
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
                // use: [
                //     MiniCssExtractPlugin.loader,
                //     "css-loader"
                // ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.BannerPlugin('author: colorski, qq: 290518066, hash: [hash], file: [file]'),
        new ExtractTextPlugin("styles.css"),
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //   }),
        new HtmlWebpackPlugin({
            filename: __dirname + "/dist/index.html",
            template: __dirname + "/src/template.html"
        }),
        new HtmlWebpackPlugin({
            filename: __dirname + "/index.html",
            template: __dirname + "/src/template.html"
        }),
        //注意，下边清除文件的时候，如果只使用dist/*.*，清除不了文件夹，不如使用dist/*全部清除
        new CleanWebpackPlugin('dist/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
    ],
}


```
## Plugins

1.BannerPlugin('版权或者版本信息！')

在打包后的bundle.js里头部添加一些信息，如版权或版本信息；

2.mini-css-extract-plugin 

除了3.的分离独立css功能外，还有其他功能和优势如：异步加载、性能更好、更易使用，将来还有目标支持热加载；
https://webpack.js.org/plugins/mini-css-extract-plugin/

3.extract-text-webpack-plugin

从js文件中分离出独立的css文件
https://www.npmjs.com/package/extract-text-webpack-plugin

4.UglifyJsPlugin  

压缩js代码，在webpack@4已经是内置模块了，直接在package.json里打包webpack的地方声明一下mode是生产模块即可：
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


## Opatimization


----  1. Tree Shaking  打包优化

用于移除js中未引用的代码；
在webpack@4中，通过 pakage.json 的 sideEffects 属性作为标记，表明项目中哪些文件是"pure"（纯es6模块），由此可以安全删除文件中未引用部分。

https://webpack.docschina.org/guides/tree-shaking/

按照设置好像不起作用。。。需要进一步了解“无副作用”
https://zhuanlan.zhihu.com/p/32831172



## react-router@4.28.2


----  1.关于二级路径页面刷新404的问题

按照react-router@4的方式配置完路径后，在localhost:3030时刷新页面是正常显示的，可是当进入二级页面如localhost:3030/users时刷新页面会报错：Cannot GET /users。

有两种解决办法：

一种是使用HashRouter,即把BrowserRouter改成HashRouter。
但是这种方式的路径是这样的：http://localhost:3030/#/users

一种是修改webpack配置即可（注意现阶段只测试了开发环境）。
在devSever下增加：historyApiFallback: true,
在output下增加：publicPath: '/'
注意：记得配置完重启服务


----  2.关于不同页面层级导航选中效果

比如一个用户详情页，上级是用户列表页，再上级是用户总览页；当进入某个用户详情页事，让列表页和总览页都选中；
只要设计好路径即可。如：
总览页：/users
列表页：/users/list
详情页：/users/list/detail/:id
注意，在配置route的时候合理使用exact，像这样：

```
<Switch>
    <Route path='/' exact component={Home} />
    <Route path='/products' component={Product} />
    <Route path='/users/list' exact component={UserList} />
    <Route path='/users/list/detail/:userId' component={UserDetail} />
    <Route path='/users/add' component={UserAdd} />
    <Redirect to='/' />
</Switch>

```

