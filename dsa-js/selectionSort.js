let arr = [5,3,2,4,6,1];

for(let i = 0; i < arr.length; i++){
    let minVal = arr[i];
    let minIndex = i;

    for(let j = i + 1; j < arr.length; j++){
        if(arr[j] < minVal){
            minVal = arr[j];
            minIndex = j;
        }
    }
    let temp = arr[i];
    arr[i] = minVal;
    arr[minIndex] = temp; 
}

for(let k = 0; k < arr.length; k++){
    console.log(arr[k] + " ");
}

console.log(arr);