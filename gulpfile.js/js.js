const { src, dest } = require('gulp');
const log = require('fancy-log');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function js() {
    log.info('Building js files...');
    
    return src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(dest('dist/js/'));
}

module.exports = js;