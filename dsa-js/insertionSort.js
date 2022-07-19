//O(n^2) T O(1) S - stable
let arr = [2,5,6,1,4,6,9,0];
let temp; 
insertionSort(arr);
console.log(arr);

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        temp = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > temp){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}

// function insertionSort(arr){
//     //start at second element because will be comparing to left element
//     for(let i = 1; i < arr.length; i++){

//         //store current element in temp
//         temp = arr[i];

//         //create pointer for left element
//         let j = i - 1;

//         //move left and compare left with current
//         //if left is larger then shift it to right
//         while(j >= 0 && arr[j] > temp){

//             //if left > temp then move j to right (j + 1)
//             arr[j + 1] = arr[j]

//             //decrement to step left for each compare up to current length of i
//             j--;
//         }

//         //while will exit when left is not larger
//         //set temp to right of left (j + 1)
//         arr[j + 1] = temp;
//     }
// }