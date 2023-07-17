function findRotationCount(nums) {
  let l = 0;
  let r = nums.length-1;
  
  while(l <= r){
    let mid = Math.floor((l+r)/2);
    if(mid > 0 &&  nums[mid] < nums[mid-1]){
        return mid;
    }else if(nums[mid] < nums[r]){
        r = mid-1;
    }else{
        l = mid+1;
    }
  }
  return 0;
}

module.exports = findRotationCount