
var assert = require('assert');
var nondivisors = require('./11_nondivisors');

assert(JSON.stringify(nondivisors([3,1,2,3,6])) == JSON.stringify([2,4,3,2,0]));
assert(JSON.stringify(nondivisors([1,3,9,12,9,4])) === JSON.stringify([5,4,2,2,2,4]));
assert(JSON.stringify(nondivisors([30,27,27,5,1,6,10,15,7,10,29,19,19,2,2])) == JSON.stringify([ 6, 12, 12, 13, 14, 11, 9, 12, 13, 9, 13, 12, 12, 12, 12 ])); // missing 10 case

// var random = [],
//     i,
//     n = 100,
//     t = 1000;

// while (t--) {
//   random = [];
//   for (i = 0; i < n; i+=1) {
//     random.push(~~(Math.random() * 2 * n) + 1);
//   }

//   try {
//     nondivisors(random);
//   } catch (e) {
//     e.message += ', ' + JSON.stringify(random);
//     throw e;
//   }
// }