temperatures = [32, 26, 12, -5, -1, 18]
temperatures += [21]

def negative(temps):
  days = 0
  for t in temps:
    if t < 0:
      days += 1

  return days

print temperatures
print negative(temperatures)

def reverse(a):
  N = len(a)
  for i in xrange(N/2):
    k = N - 1 - i
    a[i], a[k] = a[k], a[i]
  return a

print reverse(temperatures)
