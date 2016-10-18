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