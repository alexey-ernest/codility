def gcd(a, b):
  """
  @brief      Greatest common divisor: O(log(a + b))
  
  """
  if a % b == 0:
    return b
  else:
    return gcd(b, a % b)

assert gcd(12,9) == 3

def lcm(a, b):
  """
  @brief      Least common multiple: lcm(a, b) = a*b/gcd(a,b), thus O(log(a + b))
  
  """
  return a * b / gcd(a, b)

assert lcm(9,12) == 36
