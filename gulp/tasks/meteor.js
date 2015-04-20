var gulp = require('gulp');

var config = require("./../config.json");
var meteor = require("./../jobs/meteor.js");

gulp.task("meteor", meteor(config.src, {"VELOCITY": 0}));
