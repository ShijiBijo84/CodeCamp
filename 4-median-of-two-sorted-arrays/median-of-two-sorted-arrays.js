/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b)
    const len = mergedArray.length
    const halfLen = Math.floor(len / 2);
    if (len % 2 === 0) return (mergedArray[halfLen] + mergedArray[halfLen - 1]) / 2
    else return mergedArray[halfLen] 
};