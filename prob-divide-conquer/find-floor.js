function findFloor(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            if (mid == nums.length - 1) {
                return nums[mid];
            } else if (nums[mid + 1] > target) {
                return nums[mid];
            } else {
                l = mid + 1;
            }
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

module.exports = findFloor