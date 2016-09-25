
var assert = require('assert');
var doublemaxslice = require('./9_doublemaxslice');

assert(doublemaxslice([3,2,6,-1,4,5,-1,2]) === 17);
assert(doublemaxslice([-1,0,1,-1,-1,1,0,1,-1]) === 2);
assert(doublemaxslice([-1,1,1,-1,-1,1,1,-1]) === 3);
assert(doublemaxslice([-1,1,1,-1,-1,1,1,-1,-1,-1,-1,-1,1,1,1,1,1,1]) === 5);

// random numbers from -1 to 1, length = ~100,000 (got 455 expected 456)