def prefix_sums(A):
  n = len(A)
  p = [0] * (n + 1)
  for k in xrange(1, n + 1):
    p[k] = p[k - 1] + A[k - 1]
  return p

def count_total(p, x, y):
  return p[y + 1] - p[x]

# print (prefix_sums([1,3,2,5]))
# print (count_total(prefix_sums([1,3,2,5]), 1, 2))

# O(n + m)
def mashrooms(A, k, m):
  n = len(A)
  prefsums = prefix_sums(A)
  result = 0
  for p in xrange(m):
    i = max(k - p, 0)
    j = min(k + m - (k - i) * 2, n - 1)
    result = max(result, count_total(prefsums, i, j))
  return result

print (mashrooms([2,3,7,5,1,3,9], 4, 6))
