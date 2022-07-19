
 function merge(left, right){
    const arr = [];
    let i = 0;
    let j = 0;
    
    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            arr.push(left[i]);
            i++;
        }
        else{
            arr.push(right[j]);
            j++;
        }
    }
    
    return [...arr, ...left.slice(i), ...right.slice(j)];
}

function merge_sort(arr) {
    if(arr.length <= 1){
        return arr;
    }
    
    let mid = Math.ceil(arr.length / 2);
    
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return merge(merge_sort(left), merge_sort(right));
}
