var gulp = require('gulp');

var config = require("./../config.json");
var ts = require("./../jobs/ts.js");
var velocity = require("./../jobs/velocity.js");
var run = require("./../jobs/run.js");

var src = config.src;

gulp.task("ts-tests-server-unit", ts([src + "tests/server/unit/**/*.ts"], src, {"out": "tests/jasmine/server/unit/serverTests.js"}));
gulp.task("ts-tests-server-integration", ts([src + "tests/server/integration/**/*.ts"], src, {"out": "tests/jasmine/server/integration/serverTests.js"}));
gulp.task("ts-tests-server", run(["ts-tests-server-unit", "ts-tests-server-integration"]));

gulp.task("ts-tests-shared-unit", ts([src + "tests/shared/unit/**/*.ts"], src, {"out": "tests/jasmine/server/unit/sharedTests.js"}));
gulp.task("ts-tests-shared-integration", ts([src + "tests/shared/integration/**/*.ts"], src, {"out": "tests/jasmine/server/integration/sharedTests.js"}));
gulp.task("ts-tests-shared", run(["ts-tests-shared-unit", "ts-tests-shared-integration"]));

gulp.task("ts-tests-client-unit", ts([src + "tests/client/unit/**/*.ts"], src, {"out": "tests/jasmine/client/unit/clientTests.js"}));
gulp.task("ts-tests-client-integration", ts([src + "tests/client/integration/**/*.ts"], src, {"out": "tests/jasmine/client/integration/clientTests.js"}));
gulp.task("ts-tests-client", run(["ts-tests-client-unit", "ts-tests-client-integration"]));

gulp.task("ts-tests", run(["ts-tests-server", "ts-tests-shared", "ts-tests-client"]));

gulp.task("run-all-tests", velocity(src, {"JASMINE_SERVER_UNIT": 1, "JASMINE_SERVER_INTEGRATION": 1, "JASMINE_CLIENT_UNIT": 1, "JASMINE_CLIENT_INTEGRATION": 1}));
gulp.task("run-unit-tests", velocity(src, {"JASMINE_SERVER_UNIT": 1, "JASMINE_SERVER_INTEGRATION": 0, "JASMINE_CLIENT_UNIT": 0, "JASMINE_CLIENT_INTEGRATION": 0}));
gulp.task("run-integration-tests", velocity(src, {"JASMINE_SERVER_UNIT": 0, "JASMINE_SERVER_INTEGRATION": 1, "JASMINE_CLIENT_UNIT": 0, "JASMINE_CLIENT_INTEGRATION": 1}));
