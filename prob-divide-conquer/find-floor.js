function findFloor(nums, target) {
  let l = 0;
  let r = nums.length-1;
  let mid = math.floor((l+r)/2);
  while(l <= r){
    if(nums[mid] < target){
        if(mid == nums.length - 1){
            return nums[mid];
        }else if(nums[mid+1] > target){
            return nums[mid];
        }else{
            l = mid + 1;
            mid = math.floor((l+r)/2);
        }
    }else{
        r = mid
        mid = math.floor((l+r)/2);
    }
  }
  return -1; 
}

module.exports = findFloor