
/**
 * Voracious fishes task.
 *
 * @param      {Array}  A       Fish sizes.
 * @param      {Array}  B       Fish directions.
 */
function fishes(A, B) {
  var len = A.length,
      i, j,
      stack = [],
      count = 0;
  for (i = 0; i < len; i+=1) {
    if (!count) {
      stack[count++] = i;
      continue;
    }

    // comparing current fish with top one
    if (B[i] === 1 || B[stack[count - 1]] === 0) {
      // never meet
      stack[count++] = i;
      continue;
    }

    // somebody will die
    stack[count] = i;
    for (j = count - 1; j >= 0; j-=1) {
      if (B[stack[j]] === B[i]) {
        // one directions, pushing new fish to the stack
        count = j + 2;
        break;
      }
      if (A[stack[j]] > A[i]) {
        // new fish will be eaten
        count = j + 1;
        break;
      }

      // new fish ate somebody
      stack[j] = i;
    }

    if (j < 0) {
      // all were eaten
      count = 1;
    }
  }

  return count;
}

module.exports = fishes;