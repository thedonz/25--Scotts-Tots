var gulp = require('gulp'),
fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: 'src'
  }))
  .pipe(gulp.dest('./dist'));
});