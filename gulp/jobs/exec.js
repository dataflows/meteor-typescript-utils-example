'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var spawn = require('child_process').spawn;

function execTask(cmd, args, params) {
    var tag = params && params.tag || '';

    return function (callback) {
        gutil.log(tag, 'spawn');

        var child = spawn(cmd, args, params.options);
        child.stdout.on('data', function(data) { process.stdout.write(data); });
        child.stderr.on('data', function(data) { process.stderr.write(data); });
        child.on('close', function(error) {
            gutil.log(tag, '' + error);
            callback(error);
        });
    };
};

module.exports = execTask;
