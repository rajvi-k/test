i=input("")
for a in range(int(i)):
    n=input("")
    def count(n):
        x = 1
        y = 1
        i = 0
        while (i < n):
            x, y, i = x+y, x, i+1
        return x
    n=int(n)+1
    for i in range(n):
        ans=count(i)
    print(ans%(10**9+7));