
/**
 * Finds number of non-divisors for each element in array.
 *
 * @param      {Array}  A       Input array of numbers.
 * @return     {Array}          Array of corresponding number of non-devisors.
 */
function nondivisors(A) {
    var n = A.length,
        i, k,
        factors = [];
    
    // each number has value maximum 2*n
    // building list of all prime factors for 2*n: O(2*n*log(log(2*n)))
    for (i = 2; i <= n; i+=1) {
        for (k = 2 * i; k <= 2 * n; k+=i) {
            if (typeof factors[k] === 'undefined') {
                factors[k] = [i];
            } else {
                factors[k].push(i);
            }
        }
    }
    
    // counting all numbers in in array: time O(n), space O(2n)
    var counting = [0];
    for (i = 0; i < n; i+=1) {
        if (typeof counting[A[i]] === 'undefined') {
            counting[A[i]] = 1;
        } else {
            counting[A[i]] += 1;
        }
    }
    counting[1] = counting[1] || 0;
    
    // filtering all factors for each array element: O(n * log(n))
    var result = [],
        nonDivisors,
        dividers,
        divlen,
        j;
    
    for (i = 0; i < n; i+=1) {
        nonDivisors = n;
        dividers = factors[A[i]] || [];
        dividers = dividers.slice();
        
        // excluding also 1-s
        if (A[i] !== 1) {
          dividers.push(1);
        }

        dividers.push(A[i]);

        for (j = 0, divlen = dividers.length; j < divlen; j+=1) { // O(log(n))
          nonDivisors -= counting[dividers[j]] || 0;
        }

        // todo: remove
        // var testing = 0, 
        //     j;
        // for (j = 0; j < n; j+=1) {
        //   if (i === j) continue;
        //   if (A[i] % A[j] !== 0) {
        //     testing += 1;
        //   }
        // }

        // if (testing !== nonDivisors) {
        //   throw new Error(testing + '!=' + nonDivisors + ' for i=' + i);
        // }

        result[i] = nonDivisors;
    }
    
    return result;
}

module.exports = nondivisors;
