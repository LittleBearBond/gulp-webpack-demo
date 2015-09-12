var gulp = require('gulp');
var webpack = require('webpack');
//http://www.browsersync.cn/docs/recipes/
//http://www.browsersync.cn/docs/options/
//http://www.browsersync.cn/docs/gulp/
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var devSrc = './dev/';
var distSrc = './dist/';

var config = {
    //sass 相关配置
    sass: {
        watchSrc: devSrc + '**/*.scss'
    },
    script: {
        watchSrc: devSrc + '**/*.js', //监控脚本
    },
    webpackCfg: {
        //文件入口
        entry: './dev/main.js',
        //出口文件输出配置
        output: {
            path: distSrc, //js位置
            publicPath: distSrc, //web打包的资源地址
            filename: 'build.js'
        }
    },
    webServer: {
        server: './',
        index: 'main.html',
        port: 3000,
        /*ui: {
            port: 8080
        },*/
        logLevel: 'debug',
        logPrefix: 'bear',
        open: true,
        logConnections: true,
        files: [distSrc + '**/*.js', distSrc + '**/*.css', './main.html'] //监控变化
    },
};

var webpackConfig = require('./webpack.config.js')(config);

gulp.task('webpack-task', function() {
    console.log(webpackConfig)

    webpack(webpackConfig, function(err, stats) {
        console.log(err)
    });
    /*return gulp
        .src(devSrc + 'main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'));*/
});

// web服务 Server + watching scss/html files
gulp.task('web-server', function() {
    browserSync.init(config.webServer);
});


// 注册缺省任务
//gulp.task('default', ['webpack-task']);

gulp.task('watch', ['webpack-task', 'web-server'], function() {

    gulp.watch(config.script.watchSrc, ['webpack-task']);
    gulp.watch(config.sass.watchSrc, ['webpack-task']);

    //reload
    //gulp.watch(config.sass.watchSrc).on('change', reload);
    //gulp.watch(config.script.watchSrc).on('change', reload);

});

gulp.task('default', ['watch']);