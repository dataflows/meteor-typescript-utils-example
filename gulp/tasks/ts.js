var gulp = require('gulp');

var config = require("./../config.json");
var ts = require("./../jobs/ts.js");
var run = require("./../jobs/run.js");

var src = config.src;

/* Main source files */
gulp.task("ts-server", ts([src + "server/**/*.ts"], src, {"out": "server/server.js", "noImplicitAny": true, "target": "ES5"}));
gulp.task("ts-shared", ts([src + "shared/**/*.ts"], src, {"out": "lib/shared.js", "noImplicitAny": true, "target": "ES5"}));
gulp.task("ts-client", ts([src + "client/**/*.ts"], src, {"out": "client/client.js", "noImplicitAny": true, "target": "ES5"}));
gulp.task("ts-main", run(["ts-server", "ts-shared", "ts-client"]));

/* Packages sources */
gulp.task("ts-packages", ts([src + "package/**/*.ts"], src, {"out": "package/packages.js", "noImplicitAny": true, "target": "ES5"}));

/* All typescript sources */
gulp.task("ts", run(["ts-main", "ts-packages"]));
