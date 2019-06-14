const { src, dest } = require('gulp');
const log = require('fancy-log');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');
const cleanCSS = require('gulp-clean-css');

function css() {
    log.info('Building css files...');
    
    return src('src/**/*.scss')
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulpif(process.env.NODE_ENV === 'production', cleanCSS()))
        .pipe(dest('dist/css/'));
}

module.exports = css;