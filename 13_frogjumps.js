// 0, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fibonacci(n) {
    var fib = [0, 1],
        i;
    for (i = 2; i <= n; i+=1) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    return fib;
}

/**
 * Counts minmum number of jumps frog can do so each jump is Fib number. 
 * Wave algorithm.
 *
 * @param      {Array}  A       Leaves.
 * @return     {number}  Min number of Fib jumps.
 */
function frogjumps(A, start, fib, jumps, jumpnumber) {
    var len = A.length;

    if (typeof start === 'undefined') {
      // first init
      start = -1;
      fib = fibonacci(26), // O(1) <= 100000
      jumps = [];
      jumpnumber = 1;
    }

    var fiblen = fib.length,
        i,
        step,
        nextjumps = [],
        jumpslen;
    
    for (i = 1; i < fiblen; i+=1) { // O(log(n))
      step = start + fib[i];
      if (step > len) {
        break;
      }
      
      if (step === len || A[step]) {
        // if we can jump and we haven't been there
        if (!jumps[step] || jumps[step] > jumpnumber) {
          jumps[step] = jumpnumber;
          nextjumps.push(step);
        }
      }
    }

    // going to next leaves
    jumpslen = nextjumps.length;
    for (i = 0; i < jumpslen; i+=1) { // O(n)
      frogjumps(A, nextjumps[i], fib, jumps, jumpnumber + 1);
    }

    return jumps[len] || -1;
}

module.exports = frogjumps;