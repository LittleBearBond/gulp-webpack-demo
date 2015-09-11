var gulp = require('gulp');
var webpack = require("webpack");

var devSrc = './dev/';
var distSrc = "./dist/";

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
        entry: "./dev/main.js",
        //出口文件输出配置
        output: {
            path: distSrc, //js位置
            publicPath: distSrc, //web打包的资源地址
            filename: "build.js"
        }
    }
};

var webpackConfig = require("./webpack.config.js")(config);

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

// 注册缺省任务
gulp.task('default', ['webpack-task']);

gulp.task('watch', ["webpack-task"], function() {

    gulp.watch(config.script.watchSrc, ['webpack-task']);
    gulp.watch(config.sass.watchSrc, ['webpack-task']);

});
