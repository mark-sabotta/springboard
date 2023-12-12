// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let idx1 = 0;
    let idx2 = 0;
    while(idx1 < str1.length && idx2 < str2.length){
        if(str1[idx1] === str2[idx2]){
            idx1++;
        }
        idx2++;
    }
    if(idx1 === str1.length) return true;
    return false;
}
