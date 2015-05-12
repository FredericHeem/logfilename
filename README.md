
> Helper module to log filename, date/time  and colored severity with the [winston logging library](https://github.com/winstonjs/winston)


## Install

```sh
$ npm install --save logfilename
```


## Usage

```js
var logfilename = require('logfilename');

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


## License

MIT © [Frederic Heem](https://github.com/FredericHeem/)


[npm-image]: https://badge.fury.io/js/logfilename.svg
[npm-url]: https://npmjs.org/package/logfilename
[travis-image]: https://travis-ci.org/FredericHeem/logfilename.svg?branch=master
[travis-url]: https://travis-ci.org/FredericHeem/logfilename
[daviddm-image]: https://david-dm.org/FredericHeem/logfilename.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/FredericHeem/logfilename
