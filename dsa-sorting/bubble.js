function bubbleSort(arr) {
    function swap(arra, a, b){
        let c = arra[a];
        arra[a] = arra[b];
        arra[b] = c;
    }

    for(let i = arr.length; i > 0; i--){
        let swapped = false;
        for(let k = 0; k < i; k++){
            if(k+1 < i && arr[k] > arr[k+1]){
                swap(arr, k, k+1);
                swapped = true;
            }
        }
        if(!swapped) return arr;
    }
    return arr;
}

module.exports = bubbleSort;