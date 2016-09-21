var assert = require('assert');
var minslice = require('./5_minslice');

assert(minslice([-10000, 10000]) === 0);
assert(minslice([-3, -5, -8, -4, -10]) === 2);
assert(minslice([10, 10, -1, 2, 4, -1, 2, -1]) === 5);
assert(minslice([10, 10, -1, 2, -1, 4, 2, -1]) === 2);
