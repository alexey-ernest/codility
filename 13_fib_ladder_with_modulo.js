function fibonaccimap(n, limit) {
    var map = [0, 1],
        i;
    for (i = 2; i <= n; i+=1) {
        // avoiding overflow my reseting non-significant bits
        map[i] = (map[i-1] + map[i-2]) & limit;
    }
    return map;
}

function solution(A, B) {
    var L = A.length,
        maxlimit = (1 << Math.max.apply(null, B)) - 1,
        fibmap = fibonaccimap(L+1, maxlimit),
        i,
        res = [];
    
    // by induction number of ways for A[i] equals to fib(A[i] - 1), A[i] >= 2
    // and we have to skip fib(2)
    fibmap.splice(2, 1);
    
    for (i = 0; i < L; i+=1) {
        res[i] = fibmap[A[i]] & ((1 << B[i]) - 1);
    }
    return res;
}

module.exports = solution;