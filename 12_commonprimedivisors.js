
function findgcd(a, b) {
    if (a % b === 0) {
        return b;
    }
    return findgcd(b, a % b);
}

function haveTheSameDivisors(a, gcd) {
    while (gcd !== 1 && a !== 1) { // O(log(a))
        gcd = findgcd(a, gcd);
        a /= gcd;
    }
    if (gcd === 1) {
        // no common divisor
        return false;
    }
    
    // a contains the same divisors as gcd
    return true;
}

/**
 * Finds number of pairs with the same prime divisors.
 *
 * @param      {Array}  A       Array
 * @param      {Array}  B       Array
 * @return     {number}  Number of pairs with the same prime divisors.
 */
function commonprimedivisors(A, B) {
    var len = A.length,
        i,
        gcd,
        count = 0,
        div,
        divgcd;
    for (i = 0; i < len; i+=1) { // O(n)
        // gcd contains all common prime divisors
        gcd = findgcd(A[i], B[i]); // O(log(a + b))
        
        // we should check remaining divisors for a and b
        if (!haveTheSameDivisors(A[i], gcd) || 
            !haveTheSameDivisors(B[i], gcd)) {
            // a or b contains different divisors than gcd
            continue;
        }
        
        // both a and b have the same divisors as gcd, hence each other
        count += 1;
    }
    
    return count;
}

module.exports = commonprimedivisors;