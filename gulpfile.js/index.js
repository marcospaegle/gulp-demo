const { series } = require('gulp');

// tasks
const css = require('./css');
const js = require('./js');

// series
const _prod = series(css, js);
const _dev = series(css, js);

// exports
exports.prod = _prod;
exports.dev = _dev;

if (process.env.NODE_ENV === 'production') {
    exports.default = _prod;
} else {
    exports.default = _dev;
}