/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    if (!nums.length) return 0
    let count = 0
    for (let num of nums) {
        let isEven = num.toString().split('').length % 2 === 0
        count += isEven ? 1 : 0
    }
    return count
};