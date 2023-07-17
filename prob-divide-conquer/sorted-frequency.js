function sortedFrequency(nums, target) {
    let l = 0;
    let r = nums.length -1;
    let mid = 0;
    let lowerM = 0;
    let upperM = 0;
    while(l <= r){
        
        mid = Math.floor((l+r)/2);
        if(nums[mid]<target){
            l = mid+1;
        }else if(nums[mid]>target){
            r = mid-1;
        }else{
            break;
        }
    }
    if(nums[mid] != target){
        return -1;
    }
    let lowerL = 0;
    let lowerR = mid;
    
    while(lowerL <= lowerR){
        lowerM = Math.floor((lowerL+lowerR)/2);
        if(nums[lowerM] != target){
            lowerL = lowerM+1;
        }else if(lowerM == 0){
            break;
        }else if(nums[lowerM-1] == target){
            lowerR = lowerM;
        }else{
            break;
        }
    }

    let upperL = mid;
    let upperR = nums.length-1;
    
    while(upperL <= upperR){
        upperM = Math.floor((upperL+upperR)/2);
        if(nums[upperM] != target){
            upperR = upperM-1;
        }else if(upperM == nums.length-1){
            break;
        }else if(nums[upperM+1] == target){
            upperL = upperM+1;
        }else{
            break;
        }
    }
    return upperM - lowerM + 1;
}

module.exports = sortedFrequency