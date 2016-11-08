
/**
 * Counting sort of an array: O(N+M)
 *
 * @param      {array}   A       An array to sort.
 * @param      {number}  M       Limit of array elements.
 */
function countingSortIndexes(A, M) {
    var N = A.length,
        i,
        res = [],
        el;
    for (i = 0; i < N; i+=1) {
        el = A[i];
        if (typeof res[el] === 'undefined') {
            res[el] = [];
        }
        
        res[el].push(i);
    }

    return res;
}

/**
 * Builds ordered section of planks in each point
 *
 * @param      {array}  A       Plank start points.
 * @param      {array}  B       Plank end points.
 * @param      {array}  C       Nails.
 */
function buildSection(A, B, C) { // O(M)
    var N = A.length,
        M = C.length,
        i,
        j = 0,
        k = 0,
        q,
        section = [],
        planks = [];

    // sorting A and B
    var sortedAIndices = countingSortIndexes(A, 2*M),
        sortedA = [],
        sortedB = [];
    for (i = 0; i < 2*M; i+=1) {
        if (typeof sortedAIndices[i] === 'undefined') {
            continue;
        }

        sortedA.push(A[sortedAIndices[i]]);
        sortedB.push(B[sortedAIndices[i]]);
    }

    // building planks section: time O(M), space O(M)
    for (i = 1; i <= 2*M; i+=1) {
        if (sortedA[j] === i) {
            // new plank started
            section.push(j);
            j+=1;
        }
        
        planks[i] = section.slice(0);
        
        if (sortedB[k] === i) {
            // plank just ended
            for (q = 0; q < section.length; q+=1) {
                if (section[q] === k) {
                    section.splice(q, 1);
                    break;
                }
            }
            k+=1;
        }
    }

    return planks;
}

function areAllNailed(N, section, C, p) { // O(N+M)
    var i,
        j,
        nailedPlanks = [],
        nail,
        sec;
    
    // counting nailed planks: O(M)
    for (i = 0; i < p; i+=1) {
        nail = C[i];
        sec = section[nail];
        for (j = 0; j < sec.length; j+=1) {
            nailedPlanks[sec[j]] = 1;
        }
    }
    
    // checking if all planks nailed: O(N)
    for (i = 0; i < N; i+=1) {
        if (nailedPlanks[i] !== 1) {
            return false;
        }
    }
    
    return true;
}

function solution(A, B, C) { // O(log(M) * (N + M))
    var M = C.length,
        beg = 0,
        end = M,
        mid,
        result = -1,
        section = buildSection(A, B, C); // O(M)
        
    // binary search: O(log(M))
    while (beg <= end) {
        mid = ~~((beg + end) / 2);
        if (areAllNailed(A.length, section, C, mid)) {
            end = mid - 1;
            result = mid;
        } else {
            beg = mid + 1;
        }
    }
    
    return result;
}

module.exports = solution;
