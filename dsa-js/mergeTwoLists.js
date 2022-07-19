let first = [2];
let second =[1, 0];
// let first = [1,3,5];
// let second = [2,4,6,0,0,0];
// // let first = [5,10,4];
// let second = [8,13,2,0,0,0];

function merge_one_into_another(first, second) {
    let output = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < first.length && j < second.length && j < first.length){
        if(first[i] <= second[j]){
            output[k++] = first[i++];
        }
        else{
            output[k++] = second[j++];
        }
    }

    while(i < first.length){
        output[k++] = first[i++]; 
    }

    while(j < second.length/2){
        output[k++] = second[j++]; 
    }

    return output;
}

console.log(merge_one_into_another(first, second) );
