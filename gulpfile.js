var gulp = require('gulp'),
gutil = require('gulp-util'),
fileinclude = require('gulp-file-include'),
sass = require('gulp-sass'),
webserver = require('gulp-webserver');

gulp.task('fileinclude', function() {
  gulp.src(['src/index.html'])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: 'src'
  }))
  .pipe(gulp.dest('dist'))
  .pipe(reload());
});


gulp.task('styles', function() {
  return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload());
});

gulp.task('server', function() {
  return gulp.src('dist')
    .pipe(webserver({ livereload: true }));
});

gulp.task('watch', function() {
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/styles/**/*.scss', ['styles']);
});

// helper function called “reload” that will either return a stream to trigger LiveReload (if LiveReload is available) or simply return a noop stream
function reload() {
  if (webserver.reload) {
    return webserver.reload();
  }

  return gutil.noop();
}

gulp.task('default', ['build', 'watch', 'server']);