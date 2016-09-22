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

print countingSort([1,7,3,5,2], 7)