const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('src/block/**/*.scss', gulp.parallel('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('src/components/**/*.js').on('change', browserSync.reload);
    gulp.watch('src/redux/*.js').on('change', browserSync.reload);
});

gulp.task('sass', () => {
    return gulp.src('src/block/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream())
});

// gulp.task('watch', () => {
//     gulp.watch('src/block/**/*.scss', gulp.parallel('sass'));
// });

gulp.task('default', gulp.parallel('sass', 'serve'));