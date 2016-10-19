var assert = require('assert');
var minlargestsum = require('./14_minimize_largest_sum_of_blocks');

assert(minlargestsum(3,5,[2,1,5,1,2,2,2]) === 6);
assert(minlargestsum(3,5,[2]) === 2);