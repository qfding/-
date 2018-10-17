const gulp =require("gulp"),
htmlmin = require('gulp-htmlmin'),//压缩html
uglify = require('gulp-uglify'),//压缩js
connect = require('gulp-connect'),//开启服务器
babel = require('gulp-babel'),//es6=>es5
cleanCSS = require('gulp-clean-css'),//压缩css
// rename = require("gulp-rename"),//重命名
imageMin = require('gulp-imagemin');//压缩images

//html压缩
gulp.task("html",function(){
    var options={
        collapseWhitespace:true,
        removeComments:true,
         minifyJS:true,
        minifyCSS:true   
    };
    //获取app文件夹下面的所有html文件 
    gulp.src("dianshang/**/*.html")//.pipe下一步
            .pipe(htmlmin(options))
            .pipe(gulp.dest('dist/'))
            .pipe(connect.reload());
});


//js压缩
gulp.task("js",function(){
    gulp.src('dianshang/**/*.js')
    //es6=>es5
    .pipe(babel({
        presets: ['@babel/env']
    }))
    //压缩
    .pipe(uglify())
    //.dest存储到
    .pipe(gulp.dest('dist'))
})

//css压缩
gulp.task('css', function() {
    // 1. 找到文件
  return  gulp.src('dianshang/**/*.css')
    // 2. 压缩文件
        .pipe(cleanCSS())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/'));
});

//压缩图片
gulp.task('image',function(){
    gulp.src('dianshang/images/**/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('dist/images'))
})


//重命名
// gulp.task('rename',function(){
//     gulp.src("app/**/b.html")
//     .pipe(rename("c.html"))
//     .pipe(gulp.dest("dist/")); 
// })

//监听改动
gulp.task('watch', function() {
    // 监听app下面所有的html文件, 如果文件修改就执行html任务
    gulp.watch("dianshang/**/*.html", ['html']);
    gulp.watch("dianshang/**/*.js", ['js']);
    gulp.watch("dianshang/**/*.css", ['css']);
})

// 执行静态文件的压缩和编译
gulp.task('build', ['html', 'js','css','image']);
//开启本地服务器
gulp.task('connect', function() {
    connect.server({
        root: 'dist',//根目录
        port: 8888,
        livereload: true // 开启页面刷新
    });
  });

//默认执行所有
gulp.task('default', ['build', 'connect', 'watch']);