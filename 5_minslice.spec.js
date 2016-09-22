var assert = require('assert');
var minslice = require('./5_minslice');

assert(minslice([-10000, 10000]) === 0);
assert(minslice([-3, -5, -8, -4, -10]) === 2);
assert(minslice([10, 10, -1, 2, 4, -1, 2, -1]) === 5);
assert(minslice([10, 10, -1, 2, -1, 4, 2, -1]) === 2);
assert(minslice([10, 10, -1, 2, 1, 2, 4, -1, 2, -1]) === 7);
assert(minslice([-18, 65, -11, 73, -22, 90, 21, 10, 47, 87]) === 0);
