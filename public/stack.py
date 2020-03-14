a="hello"
b="lohe"
c={}
d={}
for i in a:
    if i not in c:
        c[i]=1;
    c[i]+=1

for i in b:
    if i not in d:
        d[i]=1;
    d[i]+=1
    
if c==d:
    print("yes")
else:
    print("no")


a="akash"
l=""
d=int(input())
for i in range(d,len(a)):
    l=l+a[i]
    
for i in range(0,d+1):
    l=l+a[i  ]
    
print(l)
        

a=[[1,2,3],[4,5,6],[7,8,9]]
sum=0
for i in range(len(a)):
    for j in range(len(a)):
        sum+=a[i][j]
print(sum)
    

# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
a="helle"
l=0
r=len(a)-1
f=0
while l<=r:
    if a[l]!=a[r]:
        print("no")
        f=1
        break
    l+=1
    r-=1
    if f==0:
        print("ye")


a=5
for i in range(0,a):
    for j in range(0,a-i-1):
        print(end=" ")
    for j in range(0,i+1):
        print("* ",end=" ")
    print()