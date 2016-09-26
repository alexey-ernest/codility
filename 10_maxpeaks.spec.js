
var assert = require('assert');
var maxpeaks = require('./10_maxpeaks');

assert(maxpeaks([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) === 3);
assert(maxpeaks([0, 0, 0, 0, 0, 1, 0, 1, 0, 1]) === 2);
assert(maxpeaks([1,3,2]) === 1);
assert(maxpeaks([7, 10, 4, 5, 7, 4, 6, 1, 4, 3, 3, 7]) === 3);
assert(maxpeaks([1,3,2,1,3,4,3,2,3,4,3,2,1,2,1]) === 4);