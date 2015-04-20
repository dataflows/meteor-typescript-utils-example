'use strict';

var gulp = require('gulp');
var tslint = require('gulp-tslint');

function tslintTask(src) {
    return function () {
        return gulp.src(src)
            .pipe(tslint())
            .pipe(tslint.report('verbose'));
    };
};

module.exports = tslintTask;
