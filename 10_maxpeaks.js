
/**
 * Find maximum number of peaks k, distance between each of them should
 * not exceed k.
 *
 * @param      {number}  A       Input array.
 * @return     {number}  k.
 */
function maxpeaks(A) {
    var len = A.length,
        maxPeaks = ~~Math.sqrt(len) + 1,
        i,
        peaks = [];
    for (i = 1; i < len - 1; i+=1) { // O(n)
        if (A[i] > A[i-1] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }
    
    if (peaks.length <= 2) {
        return peaks.length;
    }
    
    var peakslen = peaks.length,
        dist,
        peaksCount,
        maxPeaksCount = 1,
        lastPeak,
        max;

    for (max = maxPeaks; max >= 2; max-=1) { // O(sqrt(n))
      lastPeak = peaks[0];
      peaksCount = 1;

      for (i = 1; i < peakslen; i+=1) { // O(n)
        dist = peaks[i] - lastPeak;
        if (dist >= max) {
            peaksCount += 1;
            if (peaksCount >= max) {
                break;
            }
            
            lastPeak = peaks[i];
        }
      }
      maxPeaksCount = Math.max(maxPeaksCount, peaksCount);
    }
    
    return maxPeaksCount;
}

module.exports = maxpeaks;