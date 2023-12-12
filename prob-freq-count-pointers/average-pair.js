// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    if(arr.length < 2) return false;
    let l = 0;
    let r = arr.length - 1;
    while(l < r){
        const thisSum = arr[l]+arr[r];
        if(thisSum === avg*2){
            return true;
        }
        if(thisSum > avg*2){
            r--;
        }else{
            l++;
        }
    }
    return false;
}
