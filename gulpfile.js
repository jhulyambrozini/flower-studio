const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const ts = require('gulp-typescript')

function scripts() {
    return gulp.src('./src/scripts.ts')
        .pipe(ts({
            noImplicitAny: false,
            outFile: 'main.js'
        }))
        .pipe(gulp.dest('./public/js'))
}

function styles() {
    return gulp.src('./src/styles.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./public/css'));
}

function images() {
    return gulp.src(['./assets/images/*', './assets/images/catalogo/*', './assets/images/eventos/*', './assets/images/slide/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images'))
}


exports.default = gulp.parallel(styles, images, scripts)
exports.watch = function () {
    gulp.watch('./src/styles.css', gulp.parallel(styles))
    gulp.watch('./src/scripts.ts', gulp.parallel(scripts))
}