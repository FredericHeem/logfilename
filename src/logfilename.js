/*global require*/
"use strict";
var _ = require('lodash');
var winston = require('winston');
var path = require('path');

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

/**

*/

function Log(label, options) {
  var optionsDefault = {
    console: {
      level: 'error',
      timestamp: true,
      colorize: true
    }
  };

  if (path.extname(label) === ".js") {
    label = path.basename(label, '.js');
  }

  var optionsWithDefaults = _.merge(optionsDefault, options);

  if (!_.contains(keys, label)) {
    var optionsFinal = _.merge(optionsWithDefaults, {
      console: {
        label: label
      }
    });
    container.add(label, optionsFinal);
    keys.push(label);
  }
  var logger = container.get(label);
  logger.exitOnError = false;
  return logger;
}

module.exports = Log;
