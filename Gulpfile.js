/**
 * author           xj
 * @date            2015-09-10 19:48:18
 * @email           568915669@qq.com
 * @description
 */
//imgmin
//base64
//jsmin
//css min
//tpl-->js
var gulp = require('gulp');
var webpack = require('webpack');
//http://www.browsersync.cn/docs/recipes/
//http://www.browsersync.cn/docs/options/
//http://www.browsersync.cn/docs/gulp/
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
//开发目录
var devSrc = './dev/';
//发布目录
var distSrc = './dist/';
//相关配置项
var config = {
    watch: [
        //sas
        devSrc + '**/*.scss',
        //script:
        devSrc + '**/*.js'
    ],
    webpackCfg: {
        //文件入口
        entry: {
            'main': './dev/main.js',
            'vue-main': './dev/vue/app.js'
        },
        //出口文件输出配置
        output: {
            path: distSrc, //js位置
            publicPath: distSrc, //web打包的资源地址
            filename: 'build.[name].js' //'build.[name].[hash].js'
        }
    },
    plugins: [
        //new CommonsChunkPlugin("a-c.js", ["a", "c"]),
        new webpack.optimize.CommonsChunkPlugin('common.js', ['a', 'd'])
    ],
    webServer: {
        server: './',
        index: 'main-vue.html',
        port: 3000,
        ui: {
            port: 8080
        },
        logLevel: 'debug',
        logPrefix: 'bear',
        open: true, //'ui',
        logConnections: true,
        //监听文件
        files: [distSrc + '**/*.js', distSrc + '**/*.css', './*.html'] //监控变化
    },
};

//读取到webpack的配置
var webpackConfig = require('./webpack.config.js')(config);

gulp.task('webpack-task', () => {
    //console.log(webpackConfig)

    webpack(webpackConfig, function(err, stats) {
        console.log(err)
    });
    /*return gulp
        .src(devSrc + 'main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'));*/
});

// web服务 Server + watching scss/js files
gulp.task('web-server', () => {
    browserSync.init(config.webServer);
});

// 注册缺省任务
//gulp.task('default', ['webpack-task']);

gulp.task('watch', ['webpack-task', 'web-server'], () => {
    gulp.watch(config.watch, ['webpack-task']);
    //reload
    //gulp.watch(config.sass.watchSrc).on('change', reload);
    //gulp.watch(config.script.watchSrc).on('change', reload);
});

gulp.task('default', ['watch']);
