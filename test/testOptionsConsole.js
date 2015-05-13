'use strict';
var assert = require('assert');
var Logfilename = require('../src/logfilename.js');

describe('logfilename info', function() {
  it('console in info mode', function() {
    var logOptions = {
      console: {
        level: 'info',
      }
    };
    var log = new Logfilename(__filename, logOptions);
    assert(log);
    log.debug("debug message");
    log.info("info message");
    log.error("error message");
  });
});
