// () =>-новый синтаксис function
// done(параметр)-элемент нового синтаксиса при помощи него начинается и завершается function
const { src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Статический сервер
// локальный сервер(его запуск)bs

function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // Отслеживание файлов
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};


// Компилировать sass в CSS и автоматически внедрять в браузеры
function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass()) // запускается плагин sass
        .pipe(dest("./css")) // выплевываются скомпелированные файлы в папку css
        .pipe(browserSync.stream());
};

exports.serve = bs;