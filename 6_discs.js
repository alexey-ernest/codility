function findIndexLowerThan(t, ranges, low, high) {
    if (typeof high === 'undefined') {
        high = ranges.length - 1;
    }
    
    if (ranges[high][0] <= t) {
        return high;
    }

    var i,
        v;
    while (low < high) {
        i = low + Math.round((high - low) / 2);
        v = ranges[i][0];

        if (v <= t) {
            low = i;
        } else {
            high = i - 1;
        }
    }

    if (low === high && ranges[high][0] > t) {
        return high - 1;
    }
    
    return Math.min(low, high);
}

function solution(A) {
    var len = A.length,
        ranges = [],
        i;
    // building array of ranges: O(n)
    for (i = 0; i < len; i+=1) {
        ranges[i] = [i - A[i], i + A[i]];
    }
    
    // sorting ranges by lowest bound: O(n*log(n))
    ranges.sort(function (a, b) {
        return a[0] - b[0];
    });

    // counting intersections: O(n*log(n))
    var intersections = 0,
        maxRange,
        inclusiveIndex;
    for (i = 0; i < len; i+=1) {
        maxRange = ranges[i][1];
        inclusiveIndex = findIndexLowerThan(maxRange, ranges, i + 1);
        intersections += inclusiveIndex - i;
        if (intersections > 10000000) { // by task conditions
            return -1;
        }
    }
    
    return intersections;
}


// 1,5,2,1,4,0 - radiuses, index = center

// -4, -1, 0, 0, 2, 5
// 6,  1,  4, 8, 4, 5

// 5,  2,  2, 2, 0, 0 = 11

console.log(solution([1,5,2,1,4,0]));
console.log(solution([0,0,0,0,0,0]));
