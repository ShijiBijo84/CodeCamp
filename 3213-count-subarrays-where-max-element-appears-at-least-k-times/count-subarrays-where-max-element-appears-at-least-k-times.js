/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    const max = Math.max(...nums)
    let result = 0
    let l = 0
    let count = 0
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === max) count++
        while (count >= k) {
            result += nums.length - r
            if (nums[l] === max) {
                count--
            }
            l++;
        }

    }
    return result
};