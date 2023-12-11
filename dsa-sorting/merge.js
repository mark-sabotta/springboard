function merge(arr1, arr2) {
    let a = 0;
    let b = 0;
    let result = [];
    while(a < arr1.length || b < arr2.length){
        if(a === arr1.length){
            result.push(arr2[b]);
            b++;
            continue;
        }
        if(b === arr2.length){
            result.push(arr1[a]);
            a++;
            continue;
        }
        if(arr1[a] < arr2[b]){
            result.push(arr1[a]);
            a++;
        }else{
            result.push(arr2[b])
            b++;
        }
    }
    return result;
}

function mergeSort(arr) {
    const currLen = arr.length;
    if(currLen > 1){
        return merge(mergeSort(arr.slice(0, Math.floor(currLen/2))), mergeSort(arr.slice(Math.floor(currLen/2))));
    }
    return arr;
}

module.exports = { merge, mergeSort};