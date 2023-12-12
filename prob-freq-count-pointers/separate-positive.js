// add whatever parameters you deem necessary
function separatePositive(arr) {
    let l = 0;
    let r = arr.length -1;
    function swap(arr, a, b){
        const c = arr[a];
        arr[a] = arr[b];
        arr[b] = c;
    }
    while(l < r){
        if(arr[r] < 0){
            r--;
            continue;
        }
        if(arr[l] > 0){
            l++;
            continue;
        }
        swap(arr, l, r);
        r--;
        l++;
    }
    return arr;
}
