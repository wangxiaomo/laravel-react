var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    htmlmin = require('gulp-htmlmin')

gulp.task('template-usemin', function() {
  return gulp.src('resources/views/*.blade.php')
          .pipe(usemin({
            html: [htmlmin({
              collapseWhitespace:true,
              minifyCSS:true,
              minifyJS:true
            })],
          }))
          .pipe(gulp.dest('resources/build/'))
})
