"""
Stacks and queues
"""
N = 10

"""
Stack
"""
stack = [0] * N
size = 0
def push(x):
  global size
  stack[size] = x
  size += 1

def pop():
  global size
  size -= 1
  return stack[size]

# push(1)
# push(2)
# print stack, size
# print pop()
# print stack, size


"""
Queue
"""

queue = [0] * N
head = tail = 0

def push(x):
  global tail
  tail = (tail + 1) % N
  queue[tail] = x

def pop(x):
  global head
  head = (head + 1) % N
  return queue[tail]

def size():
  return (tail - head + N) % N

def empty():
  return tail == head


"""
Grocery store. Find minimum number of people in the queue before this can occur.
0 - new appended, 1 - served
"""

def grocery_store(A):
  n = len(A)
  size, result = 0, 0
  for i in xrange(n):
    if A[i] == 0:
      size += 1
    else:
      size -= 1
      result = max(result, -size) # memorizing maximum negative size of the queue
  return result

print grocery_store([1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1])

