def sieve(n):
  """
  @brief      Finds all prime numbers from 2 to n  
  O(n*log(log(n))): for each prime number <= sqrt(n) we cross at most: n/2 + n/3 + n/5 +... -> n*log(log(n))
  """
  sieve = [True] * (n + 1)
  sieve[0] = sieve[1] = False
  i = 2
  while i * i <= n:
    if sieve[i]:
      k = i * i
      while k <= n:
        sieve[k] = False
        k += i
    i += 1

  return sieve

assert len([k for k in sieve(20) if k == True]) == 8 # 2,3,5,7,9,11,13,17,19


def arrayFactors(n):
  """
  @brief      For each 1 <= k <= n finds minimum prime factor.
  O(n*log(log(n)))
  """
  factors = [0] * (n + 1)
  i = 2
  while i * i <= n:
    if factors[i] == 0:
      k = i * i
      while k <= n:
        if factors[k] == 0:
          factors[k] = i
        k += i
    i += 1

  return factors


def factorization(x, F):
  """
  @brief      Finds all prime factors for number x
  
  @param      x     Number to be factorized
  @param      F     Minimum prime factors for 1 <= k <= n
  """
  primeFactors = []
  while (F[x] > 0):
    primeFactors += [F[x]]
    x /= F[x]

  primeFactors += [x]

  return primeFactors

assert factorization(20, arrayFactors(20)) == [2,2,5]