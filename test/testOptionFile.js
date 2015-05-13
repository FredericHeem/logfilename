'use strict';
var assert = require('assert');

describe('logfilename', function() {
  it('console and log file in debug mode', function() {
    var logOptions = {
      console: {
        level: 'debug',
        timestamp: true,
        colorize: true
      },
      file: {
        filename: "log.txt"
      }
    };
    var log = require('../src/logfilename.js')(__filename, logOptions);

    assert(log);
    log.debug("debug message");
    log.info("info message");
    log.error("error message");
  });
});
