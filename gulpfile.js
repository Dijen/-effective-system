// () =>-новый синтаксис function
// done(параметр)-элемент нового синтаксиса при помощи него начинается и завершается function
const gulp = require('gulp');
const browserSync = require('browser-sync').create();


// Статический сервер
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./" // находится в основной рабочей папке
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*/**/.sass").on('change', browserSync.reload);
    gulp.watch("./*/**/.js").on('change', browserSync.reload);
});