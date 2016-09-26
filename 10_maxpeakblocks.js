/**
 * Maximum blocks A can be devided so each block contains at least one peak.
 *
 * @param      {number}  A       Input sequenece.
 * @return     {number}  Maximum number of peaked blocks.
 */
function maxpeakblocks(A) {
    var len = A.length,
        i,
        prefsums = [0, 0],
        totalPeaks = 0;
    // looking for peaks and building prefsums: O(n)
    for (i = 1; i < len - 1; i+=1) {
        if (A[i] > A[i-1] && A[i] > A[i+1]) {
            prefsums[i+1] = prefsums[i] + 1;
            totalPeaks += 1;
        } else {
            prefsums[i+1] = prefsums[i];
        }
    }
    prefsums[i+1] = prefsums[i];
    
    if (totalPeaks <= 1) {
        return totalPeaks;
    }
    
    // calculating blocks into which A can be devided: O(sqrt(n))
    var blocks = [];
    for (i = 2; i * i < len && i <= totalPeaks; i+=1) {
        if (len % i === 0) {
            blocks.push(i);
            if (len/i <= totalPeaks) {
                blocks.push(len/i);
            }
        }
    }
    if (i * i === len) {
        blocks.push(i); // n = p^2 case
    }
    if (blocks.length === 0) {
        // prime number
        return 1;
    }
    
    // trying to divide into blocks so each block contains at least 1 peak
    var blockscount = blocks.length,
        maxblocks = 1,
        block,
        k;
    for (i = 0; i < blockscount; i+=1) { // O(sqrt(n))
        block = len / blocks[i];
        for (k = 0; k < len; k+=block) { // O(n)
            // checking whether each block contains at least 1 peak
            if (prefsums[k + block] - prefsums[k] === 0) {
                break;
            }
        }
        if (k === len) {
          maxblocks = Math.max(maxblocks, blocks[i]);
        }
    }
    
    return maxblocks;
}

module.exports = maxpeakblocks;