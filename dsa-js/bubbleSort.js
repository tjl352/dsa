//O(n^2) T O(1) S - stable
let arr = [4,6,3,7,2,7];
let temp = 0;

for(let i = 0; i < arr.length - 1; i++){
    for(let j = arr.length - 1; j > 0; j--){
        if(arr[j - 1] > arr[j]){
            temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);