
> Helper module to log filename, date/time  and colored severity with the [winston logging library](https://github.com/winstonjs/winston)


## Install

```sh
$ npm install --save logfilename
```


## Usage

```js

var options = {
  console: {
    level: 'debug',
    timestamp: true,
    colorize: true
  },
  file: {
    filename: 'log.txt'
  }
};

var log = require('logfilename')(__filename, options);

log.debug('debug message');
log.info('info message');
log.error('error message');
```

## Test

```sh
$ npm test
```

## Continuous integration

* Travis build: [![Build Status](https://travis-ci.org/FredericHeem/logfilename.svg?branch=master)](https://travis-ci.org/FredericHeem/logfilename)

##Code climate

[![Code Climate](https://codeclimate.com/github/FredericHeem/logfilename/badges/gpa.svg)](https://codeclimate.com/github/FredericHeem/logfilename)  [![Test Coverage](https://codeclimate.com/github/FredericHeem/logfilename/badges/coverage.svg)](https://codeclimate.com/github/FredericHeem/logfilename/coverage)

## Npm package

[![npm version](https://badge.fury.io/js/logfilename.svg)](http://badge.fury.io/js/logfilename) [![Greenkeeper badge](https://badges.greenkeeper.io/FredericHeem/logfilename.svg)](https://greenkeeper.io/)

## License

MIT © [Frederic Heem](https://github.com/FredericHeem/)
