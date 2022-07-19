//O(n^2) T O(1) S - stable
let numbers = [2,5,6,1,3];
let i = 0;
let j = numbers.length - 1;
let temp;

do{
    if(numbers[i] % 2 !== 0){ //is odd
        //swap with end and decrement end by 1
        temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
        j--;
    }
    else{
        //number is even and increement i right by 1
        i++;
    } 
}
while(i < j){
}

console.log(numbers);
