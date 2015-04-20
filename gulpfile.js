var gulp = require("gulp");

var config = require("./gulp/config.json");
var run = require("./gulp/jobs/run.js");

require("./gulp/tasks/ts.js");
require("./gulp/tasks/lint.js");
require("./gulp/tasks/tests.js");
require("./gulp/tasks/clean.js");
require("./gulp/tasks/meteor.js");

var src = config.src;

gulp.task("make", ["tslint", "clean"], run(["ts", "ts-tests"]));
gulp.task("test", ["make"], run(["run-unit-tests"]));
gulp.task("test-all", ["make"], run(["run-all-tests"]));
gulp.task("run", ["make"], run(["meteor"]));

gulp.task("default", ["make"]);
