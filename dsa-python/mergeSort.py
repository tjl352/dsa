from lib2to3.pgen2.token import LEFTSHIFT
# O(n log n) T | O(n log n) S

def mergeSort(array):
  if len(array) == 1: #base case
    return array
  middleIndex = len(array) // 2 #// round down
  leftHalf = array[:middleIndex] #what is :
  rightHalf = array[middleIndex:]
  return mergeSortedArrays(mergeSort(leftHalf), mergeSort(rightHalf))

def mergeSortedArrays(leftHalf, rightHalf):
  sortedArray = [None] * (len(leftHalf) + len(rightHalf))
  k = i = j = 0
  while i < len(leftHalf) and j < len(rightHalf):
    if leftHalf[i] <= rightHalf[j]:
      sortedArray[k] = leftHalf[i]
      i += 1
    else:
      sortedArray[k] = rightHalf[j]
      j+= 1
      k += 1
  while i < len(leftHalf):
      sortedArray[k] = leftHalf[i]
      i += 1
      k += 1
  while j < len(rightHalf):
      sortedArray[k] = rightHalf[j]
      j += 1
      k += 1
  return sortedArray

