const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('serve', () => {
  gulp.watch('src/block/**/*.scss', gulp.parallel('sass'));
});

gulp.task('sass', () => {
  return gulp.src('src/block/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'));
});

gulp.task('default', gulp.series('sass'));
