# O(n log n) T and O(n) S

def mergeSort(array):
    if len(array) <= 1:
        return array
    auxiliaryArray = array[:]
    mergeSortHelper(array, 0, len(array) - 1, auxiliaryArray)
    return array

def mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray):
    if startIndex == endIndex:
        return
    middleIndex = (startIndex + endIndex) // 2
    mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray)
    mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray)
    doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray)

def doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray):
    k = startIndex
    i = startIndex
    j = middleIndex + 1
    while i <= middleIndex and j < endIndex:
        if auxiliaryArray[i] <= auxiliaryArray[j]:
            mainArray[k] = auxiliaryArray[i]
            i += 1
        else:
            mainArray[k] = auxiliaryArray[j]
            j += 1
        k += 1
    while i <= middleIndex:
        mainArray[k] = auxiliaryArray[i]
        i += 1
        k += 1
    while j <= endIndex:
        mainArray[k] = auxiliaryArray[j]
        j += 1
        k += 1

array = [3,5,6,2,3,45]
print(mergeSort(array))
print("hello")