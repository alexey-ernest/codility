# m = 5
# 1,5,3,4 - 13
# 2,4,2,3 - 11
# d = -2
# 4 

def sum(A):
  n = len(A)
  res = 0
  for i in xrange(n):
    res += A[i]
  return res

def count(A, m):
  n = len(A)
  c = [0] * (m + 1)
  for i in xrange(n):
    c[A[i]] += 1
  return c


##
## @brief      Checks if two arrays can swap only 1 element so their sums become equal.
##
## @param      A     First array of length n.
## @param      B     Second array of length n.
## @param      m     Maximum value of array's elements.
##
## @return     True if arrays can swap 1 element so their sums become equals.
##
def fast_solution(A, B, m):
  n = len(A)
  sum_a = sum(A)
  sum_b = sum(B)
  d = sum_b - sum_a
  if d % 2 == 1:
    return False

  c = count(A, m)
  d //= 2
  for i in xrange(n):
    if B[i] - d >= 0 and B[i] - d <= m and c[B[i] - d] > 0:
      return True
  return False

print fast_solution([1,5,3,4], [2,4,2,3], 5)