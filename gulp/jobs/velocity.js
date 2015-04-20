'use strict';

var _ = require('lodash');

var exec = require('./exec');

function runVelocity(dir, environmentVariables) {
    var env = _.extend(environmentVariables, process.env);
    return exec("meteor", ["--test"], {tag: "Meteor velocity test.", options: {cwd: dir, env: env}});
};

module.exports = runVelocity;
