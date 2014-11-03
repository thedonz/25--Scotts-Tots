var gulp = require('gulp')
  minifyCSS = require('gulp-minify-css'),
  concat = require('gulp-concat');

gulp.task('css', function() {
  return gulp.src('*.css')
  .pipe(concat('side.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('/css'));
});

gulp.watch('*.css', function (){
  gulp.run('css');
});
