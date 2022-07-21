import math

def msort(l, start, end):
    if math.ceil((start + end)/2) <= 1:
        return
    mid = math.ceil((start + end)/2)
    msort(l, start, mid)
    msort(l, mid+1, end)
    i = start
    j = mid+1
    mlist = []
    while i <= mid and j<= end:
        if l[i] <= l[j]:
            mlist.append(l[i])
            i += 1
        elif l[j] < l[i]:
            mlist.append(l[j])
            j += 1
    while i <= mid:
        mlist.append(l[i])
        i += 1
    while j <= end:
        mlist.append(l[j])
        j += 1
    l[start:end+1] = mlist

def mergesort(a):
    msort(a, 0, len(a) - 1)

a = [2,5,2,4,1]
print(mergesort(a))
    
