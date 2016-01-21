# mycomp-aes [![Build Status](https://travis-ci.org/arvindr21/mycomp-aes.svg?branch=master)](https://travis-ci.org/arvindr21/mycomp-aes)

> Custom aes crpyt module


## Install

```
$ npm install --save mycomp-aes
```


## Usage

```js
var aes = require('./index.js')();

aes.enc([0x00000000,0x00000000,0x00000000,0x00000000]);
aes.dec([0xd241aab0,0x5a42d319,0xde81d874,0xf5c7b90d]);

```

## License

MIT © [Arvind Ravulavaru](http://github.com/arvindr21)
