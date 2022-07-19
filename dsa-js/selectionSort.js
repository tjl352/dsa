//O(n^2) T O(1) S - unstable
let arr = [5,3,2,4,6,1,1,-1];
let minVal;
let minIndex;
let temp;

for(let i = 0; i < arr.length - 1; i++){
    minVal = arr[i];
    minIndex = i;

    for(let j = i + 1; j < arr.length; j++){
        if(arr[j] < minVal){
            minVal = arr[j];
            minIndex = j;
            }
        }
    temp = arr[i];
    arr[i] = minVal;
    arr[minIndex] = temp; 
}

console.log(arr);