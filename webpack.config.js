// 配合使用gulp打包
// 改配置可重用
/*
webpack 来执行一次开发的编译
webpack -p for building once for production (minification)
webpack -p 来针对发布环境编译(压缩代码)
webpack --watch 来进行开发过程持续的增量编译(飞快地!)
webpack -d 来生成 SourceMaps
*/
module.exports = function(config) {
    if (!config.plugins) {
        if (process.env.NODE_ENV === 'production') {
            config.plugins = [
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: '"production"'
                    }
                }),
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }),
                new webpack.optimize.OccurenceOrderPlugin()
            ]
        }
        /*else {
           config.plugins.devtool = '#source-map'
       }*/
    };

    return {
        //页面入口文件配置
        entry: config.webpackCfg.entry,
        //文件输出配置
        output: config.webpackCfg.output,
        module: {
            preLoaders: [{
                test: /\.js$/,
                loader: "source-map-loader"
            }],
            //加载器配置
            loaders: [
                //vue
                {
                    test: /\.vue$/, // a regex for matching all files that end in `.vue`
                    loader: 'vue' // loader to use for matched files
                },
                //.css 文件使用 style-loader 和 css-loader 来处理
                {
                    test: /\.css$/,
                    loader: "style!css!autoprefixer-loader"
                },
                //
                {
                    test: /\.scss$/,
                    loader: 'style!css!sass!autoprefixer-loader'
                },
                //es6
                {
                    // use babel-loader for *.js files
                    test: /\.js$/,
                    loader: 'babel',
                    // important: exclude files in node_modules
                    // otherwise it's going to be really slow!
                    exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\//
                },
                //.js 文件使用 jsx-loader 来编译处理
                /*{
                    test: /\.js$/,
                    loader: "jsx-loader"
                },*/
                //html
                {
                    test: /\.html$/,
                    loader: "html"
                },
                //es6
                /*{
                    test: /\.js$/,
                    loader: 'es6-loader'
                }*/
                /*,
                //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
                {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
                }*/
            ]
        },
        babel: {
            presets: ['es2015'],
            plugins: ['transform-runtime']
        },
        vue: {
            loaders: {
                js: 'babel'
            }
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: config.plugins
    }
};
