'use strict';

var exec = require('./exec');
var _ = require('lodash');

function runMeteor(inDir, environmentVariables) {
    var env = _.extend(environmentVariables, process.env);
    return exec("meteor", [], {tag: "Meteor run.", options: {cwd: inDir, env: env}});
};

module.exports = runMeteor;
