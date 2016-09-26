"""
Finding divisors of a number.
"""

def divisors(n):
  """
  @brief      O(sqrt(n))
  """
  i = 1
  result = 0
  while i * i < n:
    if n % i == 0:
      result += 2 # i and n/i are divisors
    i += 1

  if i * i == n:
    result += 1

  return result

assert divisors(9) == 3
assert divisors(8) == 4
assert divisors(16) == 5

assert divisors(7) == 2
assert divisors(11) == 2
assert divisors(13) == 2
assert divisors(17) == 2

def primality(n):
  """
  @brief      Checks if n is a prime number: O(sqrt(n))
  """
  i = 2
  while i * i <= n:
    if n % i == 0:
      return False
    i += 1

  return True

assert primality(5) == True
assert primality(7) == True
assert primality(11) == True
assert primality(12) == False
assert primality(1) == True
assert primality(2) == True