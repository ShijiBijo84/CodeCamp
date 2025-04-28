/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxVal = 0;
    let left = 0;
    let right = height.length - 1
    while (left < right) {
        let width = right - left
        let h = Math.min(height[left], height[right])
        maxVal = Math.max(maxVal, h * width)
        if (height[left] < height[right]) {
            left++
        }
        else {
            right--
        }
    }

    return maxVal
};