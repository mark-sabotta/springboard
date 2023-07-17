function findRotatedIndex(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) return mid;

        if (nums[mid] >= nums[l]) {
            if (nums[l] <= target && nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}

module.exports = findRotatedIndex