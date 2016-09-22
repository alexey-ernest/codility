# O(n*n)
def selectionSort(A):
  n = len(A)
  for i in xrange(n):
    minimal = i
    for j in xrange(i + 1, n):
      if A[j] < A[minimal]:
        minimal = j
    # swap first element with minimal
    A[i], A[minimal] = A[minimal], A[i]

  return A;

# print selectionSort([1,5,3,4,2])

# Count all numbers in array and iterate array of counters: O(n + k)
def countingSort(A, k):
  n = len(A)
  counters = [0] * (k + 1)
  
  # counting numbers, space complexity O(k + 1), time complexity O(n)
  for i in xrange(n):
    counters[A[i]] += 1

  # iterating counters
  p = 0
  for i in xrange(k + 1):
    for j in xrange(counters[i]):
      A[p] = i
      p += 1

  return A

# Split current array into two parts, sort each part and merge sorted arrays. 
# Time complexity - O(nlogn), space complexity - O(n)
def mergeSort(A):
  n = len(A)

  if (n < 2):
    # one element array is already sorted
    return A
  
  # sorting halfs
  middle = n // 2
  left = mergeSort(A[:middle])
  right = mergeSort(A[middle:])

  # merging result
  i = j = 0
  llen = len(left)
  rlen = len(right)
  tail = []
  for k in xrange(n):
    if i >= llen:
      tail = right[j:]
      break
    if j >= rlen:
      tail = left[i:]
      break

    if left[i] < right[j]:
      A[k] = left[i]
      i += 1
    else:
      A[k] = right[j]
      j += 1

  # appending tail
  for i in xrange(k, n):
    A[i] = tail[i - k]

  return A

print mergeSort([1,7,3,5,2,2,8,6])
