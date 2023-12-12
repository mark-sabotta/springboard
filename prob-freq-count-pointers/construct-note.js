// add whatever parameters you deem necessary
function constructNote(str1, str2) {
    if(str1.length > str2.length) return false;
    function freqCount(str){
        let freqObj = {};
        for(let key of str){
            freqObj[key] = (freqObj[key] + 1) || 1;
        }
        return freqObj;
    }
    const freqObj1 = freqCount(str1);
    const freqObj2 = freqCount(str2);
    for(let key in freqObj1){
        if(!freqObj2[key] || freqObj1[key] > freqObj2[key]) return false;
    }
    return true;
}
