// counts consecutive blocks of sum <= s
function blocks(A, s) {
    var len = A.length,
        i,
        blocks = 0,
        sum = 0;
    for (i = 0; i < len; i+= 1) {
        if (A[i] > s) {
            return 0;
        }
        
        sum += A[i];
        if (sum > s) {
            blocks += 1;
            sum = A[i];
        }
    }
    
    return blocks + 1;
}

function solution(K, M, A) {
    var len = A.length,
        i,
        sum = 0;
    // counting total sum
    for (i = 0; i < len; i+=1) {
        sum += A[i];
    }
    
    var beg = 0,
        end = sum,
        mid,
        result = -1,
        blockscount;
    while (beg <= end) {
        mid = ~~((beg + end) / 2);
        blockscount = blocks(A, mid);
        if (blockscount > 0 && blockscount <= K) {
            result = mid;
            end = mid - 1; // trying to minimize largest sum
        } else {
            // too many blocks or the sum is too low, trying to increase largest sum
            beg = mid + 1;
        }
    }
    
    return result;
}

module.exports = solution;
