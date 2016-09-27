var assert = require('assert');
var frogjumps = require('./13_frogjumps');

// assert(frogjumps([0,0,0,1,1,0,1,0,0,0,0]) === 3);
// assert(frogjumps([0,0,0,1,1,0,1,0,0,0,0,0]) === 1);
// assert(frogjumps([0,0,0,1,1,0,1,0,0,0]) === -1);
// assert(frogjumps([]) === 1);
// assert(frogjumps([0]) === 1);
// assert(frogjumps([1]) === 1);
// assert(frogjumps([1,1]) === 1);
// assert(frogjumps([1, 1, 0, 0, 0]) === 2);
// assert(frogjumps([ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0 ]) === 2);


// Random checking

function fibonacci(n) {
    var fib = [0, 1],
        i;
    for (i = 2; i <= n; i+=1) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    return fib;
}



// O(2^n) solution for checking
function jumps(a, fib, start) {
  if (typeof start === 'undefined') {
    start = -1;
  }

  if (fib[a.length - start]) {
    return 1;
  }

  var i,
      len = a.length,
      dist,
      count,
      min = Number.POSITIVE_INFINITY;
  for (i = start + 1; i < len; i+=1) {
    if (!a[i]) {
      continue;
    }

    dist = i - start;
    if (fib[dist]) {
      count = jumps(a, fib, i);
      if (count > 0) {
        min = Math.min(min, count + 1);
      }
    }
  }

  return min === Number.POSITIVE_INFINITY ? -1 : min;
}

var fib = fibonacci(26),
    fibmap = {},
    i;
for (i = 0; i < fib.length; i+=1) {
    fibmap[fib[i]] = 1;
}


var iterations = 10,
    rand,
    len = 50,
    r1, r2,
    j;
for (i = 0; i < iterations; i+=1) {
  rand = [];
  for (j = 0; j < len; j+=1) {
    rand[j] = Math.random() >= 0.5 ? 1: 0;
  }

  //console.log(rand);
  r1 = frogjumps(rand);
  r2 = jumps(rand, fibmap);
  if (r1 !== r2) {
    console.log(rand, r1, r2);
    break;
  }
}



