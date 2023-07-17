function countZeroes(nums) {
  let l = 0;
  let r = nums.length -1;
  let mid = math.floor((l+r)/2);
  while(l <= r){
    if(nums[mid] == 0){
        if(mid == 0){
            return nums.length;
        }else if(nums[mid-1] == 1){
            return nums.length - mid;
        }else{
            r = mid;
            mid = math.floor((l+r)/2);
        }
    }else{
        l = mid+1;
        mid = math.floor((l+r)/2);
    }
  }
  return 0;
}

module.exports = countZeroes