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
print fibonacciDynamic(26)

# 0, 1, 2, 3, 5, 8, 13, 21, 34, 55