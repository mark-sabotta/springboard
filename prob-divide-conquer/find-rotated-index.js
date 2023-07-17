function findRotatedIndex(nums, target) {
 let l = 0;
 let r = nums.length -1;
 let mid = math.floor((l+r)/2);
 while(l <= r){
    if(nums[mid] == target) return mid;
    if(nums[mid] < target && nums[r] > target){
        l = mid+1;
        mid = math.floor((l+r)/2);
    }else{
        r = mid;
        mid = math.floor((l+r)/2);
    }
 }
 return -1;
}


[7,8,1,2,3,4,5,6], 8
module.exports = findRotatedIndex