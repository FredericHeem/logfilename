/*global require*/
"use strict";
var _ = require('lodash');
var winston = require('winston');
var path = require('path');

// SETUP WINSTON LOGGER
var container = new winston.Container();
container.add("exception", {
  console: {
    handleExceptions: false,
    timestamp: true,
    label: "EXCEPTION",
    colorize: true
  }
});

container.get("exception").exitOnError = true;
var keys = [];

var optionsDefault = {
  console: {
    level: 'debug',
    timestamp: true,
    colorize: true
  }
};

function Log(label, options) {
  if (path.extname(label) === ".js") {
    label = path.basename(label, '.js');
  }

  optionsDefault = _.merge(optionsDefault, options);

  if (!_.includes(keys, label)) {
    var optionsFinal = _.merge(optionsDefault, {
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
