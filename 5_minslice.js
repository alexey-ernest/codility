
function sum(P, i, j) {
  return P[j + 1] - P[i];
}

function minslice(A) {
    var len = A.length,
      i,
      prefsums = [0];
    for (i = 0; i < len; i+=1) {
      prefsums[i + 1] = prefsums[i] + A[i];
    }
    
    var minAvg = Number.MAX_VALUE,
        minIndex = 0,
        avg,
        avg1,
        avg2,
        j,
        k1,
        k2;

    i = 0;
    j = len - 1;
    while ((j - i + 1) > 2) {
      avg = sum(prefsums, i, j) / (j - i + 1);
      if (avg < minAvg) {
        // memorizing first minimum avg (< sign is crutial)
        minAvg = avg;
        minIndex = i;
      }

      // determining wheter to go: to the left or to the right
      // for that we will compare avg for left and right halfs
      k1 = Math.floor(i + (j - i) / 2);
      k2 = Math.ceil(i + (j - i) / 2);
      avg1 = sum(prefsums, i, k1) / (k1 - i + 1);
      avg2 = sum(prefsums, k2, j) / (j - k2 + 1);

      if (avg1 <= avg2) {
        // left half avg is smaller, decrementing right bound then
        j--;
      } else {
        // incrementing left bound
        i++;
      }
    }

    return minIndex;
}

module.exports = minslice;
