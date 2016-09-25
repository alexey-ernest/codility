
var assert = require('assert');
var doublemaxslice = require('./9_doublemaxslice');

assert(doublemaxslice([3,2,6,-1,4,5,-1,2]) === 17);

// random numbers from -1 to 1, length = ~100,000 (got 455 expected 456)