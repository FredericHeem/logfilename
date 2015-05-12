'use strict';
var assert = require('assert');
var Logfilename = require('../src/logfilename.js');

describe('logfilename', function() {
  it('console in info mode', function() {
    var options = {
      console: {
        level: 'info',
      }
    };

    var logfilename = new Logfilename(options);
    var log = logfilename.get(__filename);
    assert(log);
    log.debug("debug message");
    log.info("info message");
    log.error("error message");
  });
});
