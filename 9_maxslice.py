"""
Fastest algorithm for finding max slice: O(n).
Its based on assumption, that max slice in i-th position equals max(0, max(i-1) + A[i])
"""

def maxslice(A):
  n = len(A)
  max_ending = max_slice = 0
  for i in xrange(n):
    max_ending = max(0, max_ending + A[i])
    max_slice = max(max_slice, max_ending)
  return max_slice

assert maxslice([5,-7,3,5,-2,4,-1]) == 10
