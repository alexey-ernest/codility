"""
Fast leader search algorithm: O(n)
Leader is a number which occurs more than n/2 times
"""

def leader(A):
  n = len(A)
  size = 0
  value = None

  for i in xrange(n):
    if size == 0:
      # push first element to the stack
      size += 1
      value = A[i]
    else:
      if value != A[i]:
        # remove to different elements from the stack (one from the top and one new)
        size -= 1
      else:
        # put the same number as the all elements in the stack
        size += 1

  if size == 0:
    return -1

  candidate = value
  leader = -1
  count = 0

  # counting candidate occurences
  for i in xrange(n):
    if A[i] == candidate:
      count += 1

  if count > n // 2:
    leader = candidate

  return leader


assert leader([6,8,4,6,8,6,6]) == 6
assert leader([6,8,4,6,8,6,6,6]) == 6
assert leader([6,8,4,6,8,6]) == -1
