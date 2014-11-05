var gulp = require('gulp'),
fileinclude = require('gulp-file-include'),
sass = require('gulp-sass');

gulp.task('fileinclude', function() {
  gulp.src(['src/index.html'])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: 'src'
  }))
  .pipe(gulp.dest('dist'));
});


gulp.task('styles', function() {
  return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'));
});