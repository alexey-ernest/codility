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
function frogjumps(A) {
    var len = A.length,
        fib = fibonacci(26), // O(1) <= 100000
        fiblen = fib.length,
        i, j, k,
        step,
        nextjumps = [],
        next,
        candidates,
        candidateslen,
        candidate,
        jumps = [];
    
    // making step by step building the next step set
    nextjumps.push([-1]);
    for (i = 0; i < nextjumps.length; i+=1) {
      // marking all possible steps from current location
      candidates = nextjumps[i];
      candidateslen = candidates.length;
      next = [];
      for (j = 0; j < candidateslen; j+=1) {
        // trying all fibonacci numbers from current position
        candidate = candidates[j];
        for (k = 1; k < fiblen; k+=1) {
          step = candidate + fib[k];
          if (step > len) {
            break;
          }

          if (step === len || (A[step] && !jumps[step])) {
            // if we can jump and we haven't been there
            jumps[step] = i + 1;
            next.push(step);
          }
        }

        //console.log(jumps);

        if (jumps[len]) {
          // right bank reached
          break;
        }
      }

      if (jumps[len]) {
        // right bank reached
        break;
      }

      if (next.length) {
        // appending next steps
        nextjumps.push(next);
      }
    }

    return jumps[len] || -1;
}

module.exports = frogjumps;