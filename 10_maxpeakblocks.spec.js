
var assert = require('assert');
var maxpeakblocks = require('./10_maxpeakblocks');

assert(maxpeakblocks([1,2,3,4,3,4,1,2,3,4,6,2]) === 3);