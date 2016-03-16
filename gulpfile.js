var gulp = require('gulp');
var babel = require("gulp-babel");
var browserify = require("browserify");
var babelify = require("babelify");
var fs = require("fs");
var gutil = require('gulp-util');

// make director dist
if (!fs.existsSync('dist')){
    fs.mkdirSync('dist');
}

// make directory bundle
if (!fs.existsSync('bundle')){
    fs.mkdirSync('bundle');
}

gulp.task('default',['browserify','watch'],function(){
  gutil.log(gutil.colors.magenta('Finished'),'The compile is finished');
});

var transform = function(){
  browserify({ debug: true })
  .transform(babelify)
  .require("./bundle-test.js", { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); gutil.log('There is a error in transorm')})
  .pipe(fs.createWriteStream("./bundle/bundle.js"));
  gutil.log(gutil.colors.magenta('Transform is finished'));
}

gulp.task('copy',function(){
  var stream = gulp.src('src/**/*.js')
  .pipe(babel().on('error',function(err){console.log(err); gutil.log('There is a error in copy')}))
  .pipe(gulp.dest('dist'));
  return stream;
});

gulp.task('browserify',['copy'],transform);

gulp.task('browserify-watch',transform);

gulp.task('watch',function(){
  gulp.watch('src/**/*.js',['browserify']);
  gulp.watch('bundle-test.js',['browserify-watch']);
  gulp.watch('index.js',['browserify-watch']);
});
