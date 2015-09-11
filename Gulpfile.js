var gulp = require('gulp');
var webpack = require("gulp-webpack");
var webpackConfig = require("./webpack.config.js");


var devSrc = './dev/';
var distSrc = './dist/';


var config = {
    //sass 相关配置
    sass: {
        src: devSrc + '**/*.sass'
    },
    script: {
        entry: devSrc + 'main.js', //入口
        dist: distSrc, //打包后位置
        watchSrc: devSrc + '**/*.js', //监控脚本
        name: 'bundle.js'
    }
};

gulp.task('webpack', function() {
    webpack(webpackConfig);
    /*return gulp
        .src(devSrc + 'main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dist'));*/
});

// 注册缺省任务
gulp.task('default', ['webpack']);

gulp.task('watch', ["webpack"], function() {

    gulp.watch(config.script.watchSrc, ['webpack']);
    gulp.watch(config.sass.src, ['webpack']);

});

//gulp.task('default', ['watch']);
