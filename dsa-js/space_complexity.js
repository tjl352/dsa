// 1. assigning variables
// 2. creating data structures
// 3. function calling and allocation

const name = 'thomas'; // constant time O(1)

const arr = [1,2,3]; // creating data structures

print(arr);

function print(arr){
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i];
        console.log(temp); // linear space complexity O(n)
    }
}