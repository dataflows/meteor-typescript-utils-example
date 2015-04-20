'use strict';

var gulp = require('gulp');
var run = require('run-sequence');

function runTask() {
    var sequence = Array.prototype.slice.call(arguments);
    var ready;

    if (typeof sequence[sequence.length - 1] === 'function') {
        ready = sequence.pop();
    }

    return function (callback) {
        run.apply(null, copySequence(sequence).concat(function (info) {
            if (ready) {
                ready(info);
            }

            if (callback) {
                callback(info);
            }
        }));
    };
}

function copySequence(subject) {
    if (!Array.isArray(subject)) {
        return subject;
    }

    var result = [];
    var i, l;

    for (i = 0, l = subject.length; i < l; i++) {
        result[i] = copySequence(subject[i]);
    }

    return result;
}

module.exports = runTask;
