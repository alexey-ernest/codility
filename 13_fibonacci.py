def fibonacciDynamic(n):
  """
  @brief      Fibonacci dynamic algorithm: O(n)
  """
  fib = [0] * (n + 1)
  fib[1] = 1
  for i in xrange(2, n + 1):
    fib[i] = fib[i - 1] + fib[i - 2];

  return fib[n];

assert fibonacciDynamic(10) == 55
assert fibonacciDynamic(31) > 1000000


def powersof2(n):
  """
  O(log(n))
  """
  powers = []
  power = 1
  while n > 0:
    remainder = n % 2
    n = n / 2
    if remainder > 0:
      powers += [power]
    power *= 2

  return powers

def multmatrix(a, b):
  return [[a[0][0]*b[0][0] + a[0][1]*b[1][0], a[0][0]*b[0][1] + a[0][1]*b[1][1]],
          [a[1][0]*b[0][0] + a[1][1]*b[0][1], a[1][0]*b[0][1] + a[1][1]*b[1][1]]]

def powermatrix(m, p):
  """
  Calculates m^p where p % 2 == 0.
  Using memoization for caching
  """
  if p == 1:
    return m

  assert p % 2 == 0

  if not 'cache' in dir(powermatrix):
    powermatrix.cache = {}

  if p in powermatrix.cache:
    return powermatrix.cache[p]

  K = powermatrix(m, int(p/2))
  R = multmatrix(K, K) # we got p/2 + p/2 = p

  # caching
  powermatrix.cache[p] = R
  return R


def fibonacciLog(n):
  """
  @brief      O(log(n)) time based on matrix multiplication
  
  """
  Q = [[1, 1,],
       [1, 0]];

  # Fib(n) = Q^(n-1)[0, 0]
  
  # getting powers of 2 for n: O(log(n))
  powers = powersof2(n)

  # calculating Q^p for each power of 2 p: O(log(n))
  matrixpowers = [powermatrix(Q, p) for p in powers]

  # multiplying result
  product = matrixpowers[0]
  k = len(matrixpowers)
  for i in xrange(1, k):
    product = multmatrix(product, matrixpowers[i])

  return product[0][1]

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

assert fibonacciLog(10) == 55

