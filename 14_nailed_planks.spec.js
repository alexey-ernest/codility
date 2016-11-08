var assert = require('assert');
var nailedPlanks = require('./14_nailed_planks');

assert(nailedPlanks([1,4,5,8],[4,5,9,10],[4,6,7,10,2]) === 4);

// unsorted planks
assert(nailedPlanks([4,5,1,8],[5,9,4,10],[4,6,7,10,2]) === 4);

// all planks are points
assert(nailedPlanks([1,4,5,10],[1,4,5,10],[1,2,3,4,5,6,7,8,9,10]) === 10);