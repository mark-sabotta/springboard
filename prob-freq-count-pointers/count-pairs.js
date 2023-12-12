// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let count = 0;
    function freqCount(str){
        let freqObj = {};
        for(let key of str){
            freqObj[key] = (freqObj[key] + 1) || 1;
        }
        return freqObj;
    }
    let intMap = freqCount(arr);
    for(let key in intMap){
        if(key*2 === target){
            count+= (intMap[key] - (intMap[key]%2));
        } else if(intMap[target-key]){
            count+= Math.min(intMap[key], intMap[target - key]);
        } 
        
    }

    return (count/2);
}
