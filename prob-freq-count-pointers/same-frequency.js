// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) return false;

    function freqCount(str){
        let freqObj = {};
        for(let i = 0; i < str.length; i++){
            freqObj[str[i]] = (freqObj[str[i]] + 1) || 1;
        }
        return freqObj;
    }
    let freqObj1 = freqCount(num1.toString());
    let freqObj2 = freqCount(num2.toString());
    for(let key in freqObj1){
        
        if(freqObj1[key] !== freqObj2[key]) return false;
    }
    return true;
}
