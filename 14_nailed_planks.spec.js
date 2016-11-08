var assert = require('assert');
var nailedPlanks = require('./14_nailed_planks');

function check(A, B, C, k) {
  var N = A.length,
      i,
      j,
      nail,
      nailed = [];
  for (i = 0; i < k; i+=1) {
    nail = C[i];
    for (j = 0; j < N; j+=1) {
      if (A[j] <= nail && B[j] >= nail) {
        nailed[j] = 1;
      }
    }
  }

  for (i = 0; i < N; i+=1) {
    if (!nailed[i]) {
      return false;
    }
  }

  return true;
}

function alternativeSolution(A, B, C) {
  var M = C.length,
      i,
      beg = 0,
      end = M,
      mid,
      result = -1;

  while (beg <= end) {
    mid = ~~((beg + end) / 2);
    if (check(A, B, C, mid)) {
      end = mid - 1;
      result = mid;
    } else {
      beg = mid + 1;
    }
  }

  return result;
}

// assert(nailedPlanks([1,4,5,8],[4,5,9,10],[4,6,7,10,2]) === 4);

// // unsorted planks
// assert(nailedPlanks([4,5,1,8],[5,9,4,10],[4,6,7,10,2]) === 4);

// // all planks are points
// assert(nailedPlanks([1,4,5,10],[1,4,5,10],[1,2,3,4,5,6,7,8,9,10]) === 10);

// // few nails in the same place
// assert(nailedPlanks([1,4,5,8],[4,5,9,10],[4,6,7,10,4,7,2]) === 4);

// // random test (B is negative-sorted)
// assert(nailedPlanks([ 1, 5 ], [ 10, 6 ], [ 1, 1, 7, 6, 10 ]) === 4);


// checking random inputs
var i,
    j,
    tests = 10,
    N,
    M,
    A,
    B,
    C,
    max = 1000,
    res1,
    res2;
for (i = 0; i < tests; i+=1) {
  N = Math.ceil(Math.random() * max);
  M = Math.ceil(Math.random() * max);

  // generating A and B
  A = [];
  B = [];
  for (j = 0; j < N; j+=1) {
    A[j] = Math.ceil(Math.random() * 2 * M);
    B[j] = Math.floor(Math.random() * (2 * M - A[j] + 1)) + A[j];
  }

  // generating C
  C = [];
  for (j = 0; j < M; j+=1) {
    C[j] = Math.ceil(Math.random() * 2 * M);
  }

  res1 = alternativeSolution(A, B, C);
  res2 = nailedPlanks(A, B, C);
  if (res1 !== res2) {
    console.log(A, B, C);
    console.log(res1, '!=', res2);
    break;
  }
}

