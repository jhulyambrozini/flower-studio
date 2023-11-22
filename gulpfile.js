const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function scripts() {
    return gulp.src('./src/scripts.js')
        .pipe(uglify())
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
    gulp.watch('./src/scripts.js', gulp.parallel(scripts))
}