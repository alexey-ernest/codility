var assert = require('assert');
var fishes = require('./7_fishes');

assert(fishes([5,3,2,1,4], [0,1,0,0,0]) === 2);
assert(fishes([4,1,2,3,5], [0,0,0,1,0]) === 4);
assert(fishes([4,1,2,3,5], [1,1,1,0,1]) === 2);
assert(fishes([4,2,1,3], [1,1,0,0]) === 1);
assert(fishes([1,2,3,4,5], [1,1,1,1,0]) === 1);
assert(fishes([1,2,3,4,5], [0,1,1,1,1]) === 5);
assert(fishes([5,4,3,2,1], [1,0,0,0,0]) === 1);
assert(fishes([5,4,2,1,3], [0,1,1,0,0]) === 2);