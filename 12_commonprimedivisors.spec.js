var assert = require('assert');
var commonprimedivisors = require('./12_commonprimedivisors');

assert(commonprimedivisors([15, 10, 9], [75, 30, 5]) === 1);
assert(commonprimedivisors([1], [1]) === 1);