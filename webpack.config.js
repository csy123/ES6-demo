var webpack = require('webpack');
var path = require('path');
var moment = require('moment');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context:path.resolve(__dirname + '/src'), //webpack从这里开始读取文件夹中的文件
    devtool: 'source-map',
    entry: {
        index:__dirname + '/src/js/index.js',  //寻找entry入口里面的所有文件…寻找 entry 里所有的文件名…

                                            //… 并读取内容。每个通过 import（ES6） 或 require()（Node） 引入的依赖关系，会被解析代码，
                                            //并且被打包到最终的构建结果当中。然后它搜索这些依赖，以及这些依赖的依赖，
                                            //直到“依赖树”的最末端节点 — 只打包它所需要的依赖，没有其他的东西。
                                            //接着，Webpack 将所有东西打包到 output.path 对应的文件夹里，
                                            //使用 output.filename 对应的命名模板来命名（[name] 被 entry 里的对象键值所替代）
        vendor: 'moment'

    },
    output: {
        path: __dirname + '/dist/',
        publicPath: '/dist/',
        filename: 'js/[name].js'
    },

    module: {
        rules: [ /*{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }]
            
        },*/{
            test: /\.(css|less)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })
        }, {
            test: /\.(png|jpg|jpeg|gif|htc)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10,
                    outputPath: 'images/'
                }
            }]
        }, {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    outputPath: 'fonts/'
                }
            }]
        }]
    },

    resolve: {
        alias: {
           /* jquery: __dirname + '/src/lib/jquery.js',*/
        }
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor' //指定公共 budle 的名字
        })
        /*new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new SpritesmithPlugin({
            // 目标小图标
            src: {
                cwd: __dirname + '/src/images/icons/common',
                glob: '*.png'
            },
            // 输出雪碧图文件及样式文件
            target: {
                image: __dirname + '/src/images/sprite.png',
                css: __dirname + '/src/styles/sprite.less'
            },
            // 样式文件中调用雪碧图地址写法
            apiOptions: {
                cssImageRef: '../images/sprite.png'
            },
            spritesmithOptions: {
                algorithm: 'top-down'
            }
        })*/
    ]
}