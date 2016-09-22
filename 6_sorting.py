from random import randint
from timeit import default_timer as timer

#import sys
#sys.setrecursionlimit(10000)

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


# Quicksort in-place implementation: O(n*logn)

def quickSort(A, left=None, right=None):
  left = left or 0
  right = right or len(A) - 1

  if (left >= right):
    return

  i, j = left, right
  p = left + (right - left) / 2
  #p = randint(left, right)
  pivot = A[p]

  while i <= j:
    while A[i] < pivot:
      i += 1
    while A[j] > pivot:
      j -= 1

    if i <= j:
      # swaping elements
      A[i], A[j] = A[j], A[i]
      i, j = i + 1, j - 1

  # preventing unnecessary recursion calls
  if left < j:
    quickSort(A, left, j)
  if i < right:
    quickSort(A, i, right)

  return A


# random array
a = [randint(0, 1000) for i in xrange(100000)]

start = timer()
quickSort(a)
end = timer()

print end - start
