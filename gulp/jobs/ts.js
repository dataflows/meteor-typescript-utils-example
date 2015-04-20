'use strict';

var gulp = require('gulp');
var typescript = require('gulp-tsc');

function tsTask(src, dest, opts) {
    return function () {
        return gulp.src(src)
            .pipe(typescript(opts))
            .pipe(gulp.dest(dest));
    };
};

module.exports = tsTask;
