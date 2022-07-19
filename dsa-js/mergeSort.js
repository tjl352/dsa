const merge = (l,r) => {
    const output =[];
    let i = 0;
    let j = 0;
    while(i < l.length && j < r.length){
        if(l[i] < r[j]){
            output.push(l[i]);
            i++;
        }
        else{
            output.push(r[j]);
            j++;
        }
    }
    return [...output, ...l.slice(i), ...r.slice(j)];
}

const mergeSort = a => {
    if(a.length <= 1) return a;
    const m = Math.ceil(a.length / 2);
    const l = a.slice(0, m); 
    const r = a.slice(m); 
    return merge(mergeSort(l),mergeSort(r));
}

console.log(mergeSort([5,2,-1,0,5]));
