var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
 
gulp.task('sass', function () {
  gulp.src('app/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('main_gulp.css'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('watch', function () {
  var watcher = gulp.watch('app/*.scss', ['sass']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('default', ['sass']);
