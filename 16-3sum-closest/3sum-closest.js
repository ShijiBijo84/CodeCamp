/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let minDiff;
    let result = 0
    let firstDiff = false
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {

            let sum = nums[i] + nums[l] + nums[r]

            let absDiff = Math.abs(target - sum)
            if (!firstDiff) {
                minDiff = absDiff
                result = sum
                firstDiff = true
            }
            if (absDiff < minDiff) {
                minDiff = Math.min(absDiff, minDiff)
                result = sum

            }
            if (sum > target) r--
            else if (sum < target) l++
            else {
                l++
                r--
            }
        }
    }
    return result
};
