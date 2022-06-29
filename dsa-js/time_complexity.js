/*
O(1) Constant Time
*/
console.log("This statement will run in Constant Time: O(1)");

// for loops when you know how many times to loop or need an index
for(let i = 0; i < 1; i++){
    console.log("This statement will run in Constant Time: O(1)");
}

// while loop when you don't know how many times to loop
let x = 2;
while(x === 2){
    console.log("This statement will run in Constant Time: O(1)");
    x++;
}

// do while when you want to run at least once
let y = 5;
do{
    console.log("This statement will run in Constant Time: O(1)");
    y++;
}
while(y == 5);

/*
O(n) Linear Time
*/
let num = [1,2,3];

for(let i = 0; i < num.length; i++){
    console.log("this runs linear time O(n)");
}

/*
O(n^2) Quadratic Time
*/
const arr = [2,4,1,5,6,7,2];

let count = 1;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        console.log("this runs in quadratic time O(n^2) " + count);
        count++;
    }
}
