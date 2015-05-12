/*global require*/
"use strict";
var _ = require('lodash');
var winston = require('winston');
var path = require('path');
var baseDir = path.resolve(__dirname, '..');

// SETUP WINSTON LOGGER
var container = new winston.Container();
container.add("exception", {
	console: {
		handleExceptions: true,
		timestamp: true,
		label: "EXCEPTION",
		colorize: true
	}
});

container.get("exception").exitOnError = false;
var keys = [];

function Log(options) {

	var optionsDefault = {
		console: {
			level: 'error',
			timestamp: true,
			colorize: true
		}
	};

	var _options = _.merge(optionsDefault, options);

	Log.prototype.get = function(filename) {
		var label = path.relative(baseDir, filename);
		if (!_.contains(keys, label)) {
			var options = _.merge(_options, {
				console: {
					label: label
				}
			});
			container.add(label, options);
			keys.push(label);
		}
		var logger = container.get(label);
		logger.exitOnError = false;
		return logger;
	};
}

module.exports = Log;
