let stack = [1,2,3];

console.log(stack.length);
stack.push(1);
console.log(stack);
console.log(stack.length);
console.log(isEmpty());

// O(1) time and space complexity
function push(element, stack){
    if(isEmpty()){
       return stack[0] = element;
    }
    else{
       return stack[stack.length] = element;
    }
}

// O(1) time and space complexity
function pop(){
    let temp = stack[stack.length - 1];
    stack[stack.length - 1] = null;
    return temp;
}

function isEmpty(){
    if(stack.length < 1){
        return true;
    }
    else{
        return false;
    }
}