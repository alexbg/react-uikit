var gulp = require('gulp');
var babel = require("gulp-babel");
var browserify = require("browserify");
var babelify = require("babelify");
var fs = require("fs");

// make director dist
if (!fs.existsSync('dist')){
    fs.mkdirSync('dist');
}

// make directory bundle
if (!fs.existsSync('bundle')){
    fs.mkdirSync('bundle');
}

gulp.task('default',['copy','watch','browserify']);

gulp.task('copy',function(){
  gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('dist'));
});

gulp.task('browserify',function(){
  browserify({ debug: true })
  .transform(babelify)
  .require("./bundle-test.js", { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream("./bundle/bundle.js"));
});

gulp.task('watch',function(){
  gulp.watch('src/**/*.js',['copy','browserify']);
  gulp.watch('bundle-test.js',['browserify']);
  gulp.watch('index.js',['browserify']);
});
