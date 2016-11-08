
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

    var result = [];
    for (i = 0; i <= M; i+=1) {
        if (res[i]) {
            result.push(res[i]);
        }
    }

    return result;
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
        p,
        section = [],
        planks = [],
        starts,
        ends;

    // sorting A and B
    var sortedAIndices = countingSortIndexes(A, 2*M),
        sortedBIndices = countingSortIndexes(B, 2*M);

    // building planks section: time O(M), space O(M)
    for (i = 1; i <= 2*M; i+=1) {
        starts = sortedAIndices[j];
        if (starts && A[starts[0]] === i) {
            for (q = 0; q < starts.length; q+=1) {
                // new planks started
                section.push(starts[q]);
            }
            j+=1;
        }
        
        planks[i] = section.slice(0);
        
        ends = sortedBIndices[k];
        if (ends && B[ends[0]] === i) {
            // planks just ended
            for (q = 0; q < section.length; q+=1) {
                for(p = 0; p < ends.length; p+=1) {
                    if (section[q] === ends[p]) {
                        section.splice(q, 1);
                    }
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
