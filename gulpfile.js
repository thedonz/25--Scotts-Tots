var gulp = require('gulp'),
fileinclude = require('gulp-file-include'),
sass = require('gulp-sass'),
webserver = require('gulp-webserver');

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

gulp.task('server', function() {
  return gulp.src('dist')
    .pipe(webserver());
});

gulp.task('watch', function() {
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/styles/**/*.scss', ['styles']);
});


gulp.task('build', ['fileinclude', 'styles', 'server']);