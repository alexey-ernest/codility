/**
 * Finds a slice of A with minimum average.
 * The important thing that we only need to check 2- and 3-length
 * slices. Because any slice of length > 3 can be represented as
 * an average of 2- and 3-length slices, that means that there
 * should be 2- or 3-length slice which has the minimum avg
 * (slice of length > 3 always has avg >= smaller slices).
 *
 * @param      {Array}  A       Returns index of the min avg slice.
 */
function minslice(A) {
  var len = A.length,
      avg,
      avg2,
      avg3,
      minAvg = Number.POSITIVE_INFINITY,
      minIndex = 0,
      i;
  for (i = 0; i < len - 2; i+=1) {
    avg2 = (A[i] + A[i + 1]) / 2;
    avg3 = (A[i] + A[i + 1] + A[i + 2]) / 3;
    avg = Math.min(avg2, avg3);
    if (avg < minAvg) {
      minAvg = avg;
      minIndex = i;
    }
  }

  // checking tail (n-2, n-1)
  avg = (A[i] + A[i + 1]) / 2;
  if (avg < minAvg) {
    minAvg = avg;
    minIndex = i;
  }

  return minIndex;
}

module.exports = minslice;
