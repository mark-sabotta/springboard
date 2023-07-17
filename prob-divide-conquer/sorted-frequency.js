function sortedFrequency(nums, target) {
    let l = 0;
    let r = nums.length -1;
    let mid = math.floor((l+r)/2);
    while(l <= r){
        if(nums[mid]<target){
            l = mid;
            mid = math.floor((l+r)/2);
        }else if(nums[mid]>target){
            r= mid;
            mid = math.floor((l+r)/2);
        }else{
            break;
        }
    }
    let lowerL = 0;
    let lowerR = mid;
    let lowerM = math.floor((lowerL+lowerR)/2);
    while(lowerL <= lowerR){
        if(nums[lowerM] != target){
            lowerL = lowerM+1;
            lowerM = math.floor((lowerL+lowerR)/2);
        }else if(lowerM == 0){
            break;
        }else if(nums[lowerM-1] == target){
            lowerR = lowerM;
            lowerM = math.floor((lowerL+lowerR)/2);
        }else{
            break;
        }
    }

    let upperL = mid;
    let upperR = nums.length-1;
    let upperM = math.floor((upperL+upperR)/2);
    while(upperL <= upperR){
        if(nums[upperM] != target){
            upperR = upperM;
            upperM = math.floor((upperL+upperR)/2);
        }else if(upperM == nums.length-1){
            break;
        }else if(nums[upperM+1] == target){
            upperL = upperM+1;
            upperM = math.floor((upperL+upperR)/2);
        }else{
            break;
        }
    }

    return upperM - lowerM + 1;
}

module.exports = sortedFrequency