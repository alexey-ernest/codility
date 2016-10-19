def binarySearch(A, x):
  n = len(A)
  beg = 0
  end = n - 1
  result = -1
  while beg <= end:
    mid = (beg + end) / 2
    if A[mid] <= x:
      beg = mid + 1
      result = mid
    else:
      end = mid - 1

  return result

print(binarySearch([1,2,3,4,5,6,7,9,10], 8)) # idx = 6 (number 7)


def boards(A, k):
  """
  @brief      Finds minimum size for k boards to cover all the holes.
  
  @param      A     Holes.
  @param      k     Number of boards.
  """
  n = len(A)
  beg = 0
  end = n - 1
  result = -1
  while beg <= end:
    mid = (beg + end) / 2
    if countboards(A, mid) <= k:
      result = mid
      end = mid - 1
    else:
      beg = mid + 1

  return result

def countboards(A, k):
  n = len(A)
  last = -1
  boards = 0
  for i in xrange(n):
    if A[i] == 1 and last < i:
      boards += 1
      last = i + k - 1

  return boards

print(boards([1,1,0,0,1,0,1,1,0], 2)) # 4
