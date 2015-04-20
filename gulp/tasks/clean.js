var gulp = require("gulp");
var path = require("path");
var del = require("del");
var config = require("../config.json");

gulp.task("clean", function(cb) {
  var files = [path.join(config.src, "**", "*.js"),
      "!" + path.join(config.src, "packages", "**", "*.js")];
  del(files, cb);
});
