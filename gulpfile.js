const { src, dest, parallel } = require('gulp');
const scss = require('gulp-sass');
const minifyCSS = require('gulp-csso');

function returnHTML() {
    return src('./src/index.html')
    .pipe(dest('./build/src'))
}
    
function returnJS() {
    return src('./src/index.js')
    .pipe(dest('./build/src/js'))
}

function returnCSS() {
    return src('./src/styles.scss')
    .pipe(scss())
    .pipe(minifyCSS())
    .pipe(dest('./build/src'))
}

exports.returnHTML = returnHTML;
exports.returnCSS = returnCSS;
exports.returnJS = returnJS;
exports.default = parallel(returnHTML, returnCSS, returnJS);

