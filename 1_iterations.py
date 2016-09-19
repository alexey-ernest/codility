n = 5

for i in range(1, n+1):
  for j in range(i):
    print '*',
  print

print ''
print '-' * 50
print ''

for i in range(n, 0, -1):
  for j in range(n - i):
    print ' ',
  for j in range(2 * i - 1):
    print '*',
  print