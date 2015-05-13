'use strict';
var assert = require('assert');

describe('logfilename', function() {
  it('empty option', function() {
    var logOptions = {};
    var log = require('../src/logfilename.js')(__filename, logOptions);

    assert(log);
    log.debug("debug message");
    log.info("info message");
    log.error("error message");
  });

  it('no option', function() {
    var log = require('../src/logfilename.js')(__filename);
    assert(log);
    log.debug("debug message");
    log.info("info message");
    log.error("error message");
  });


});
