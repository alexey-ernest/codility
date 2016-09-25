/**
 * Max slice: 0 <= X < Y < Z < N, A[X+1]+...+A[Y-1]+A[Y+1]+...+A[Z-1] is maximum
 *
 * @param      {Array}  A       Input array.
 * @return     {number}  Maximum double slice.
 */
function doublemaxslice(A) {
    var len = A.length,
        i,
        maxEnding = 0,
        maxSlice = 0,
        y,
        sum;
    
    if (len <= 3) {
        return 0;
    }
    
    y = A[1];
    for (i = 3; i < len; i+=1) { // z = i
        sum = maxEnding + Math.max(A[i-1], y);
        y = Math.min(y, A[i-1]);
        if (sum < 0) {
            y = A[i++];
        }
        
        maxEnding = Math.max(0, sum);
        maxSlice = Math.max(maxSlice, maxEnding);
    }
    
    return maxSlice;
}

module.exports = doublemaxslice;