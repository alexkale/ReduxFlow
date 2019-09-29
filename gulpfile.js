const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('src/block/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('sass'));
