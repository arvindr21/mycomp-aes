var aes = require('./index.js')();

console.log(aes.enc([0x00000000,0x00000000,0x00000000,0x00000000]));
console.log(aes.dec([0xd241aab0,0x5a42d319,0xde81d874,0xf5c7b90d]));