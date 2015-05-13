
> Helper module to log filename, date/time  and colored severity with the [winston logging library](https://github.com/winstonjs/winston)


## Install

```sh
$ npm install --save logfilename
```


## Usage

```js
var Logfilename = require('logfilename');

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

var logfilename = new Logfilename(options);
var log = logfilename.get(__filename);

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

## Npm package

[![npm version](https://badge.fury.io/js/logfilename.svg)](http://badge.fury.io/js/logfilename)

## License

MIT © [Frederic Heem](https://github.com/FredericHeem/)
