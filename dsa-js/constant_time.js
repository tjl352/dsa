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
