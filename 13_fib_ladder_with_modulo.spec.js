var assert = require('assert');
var ladder = require('./13_fib_ladder_with_modulo');

assert(JSON.stringify(ladder([4, 4, 5, 5, 1], [3, 2, 4, 3, 1])) === JSON.stringify([5, 1, 8, 0, 1]));