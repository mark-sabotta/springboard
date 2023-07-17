function findRotationCount(nums) {
  let l = 0;
  let r = nums.length-1;
  let mid = math.floor((l+r)/2);
  while(l <= r){
    if(mid > 0 &&  nums[mid] < nums[mid-1]){
        return mid;
    }else if(nums[mid] < nums[r]){
        r = mid;
        mid = math.floor((l+r)/2);
    }else{
        l = mid;
        mid = math.floor((l+r)/2);
    }
  }
  return 0;
}

module.exports = findRotationCount