/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    let prefix = ''
    let index = 0
    let endSearch = false

    while (index < strs[0].length && !endSearch) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[0][index] !== strs[i][index]) endSearch = true
        }
        if (!endSearch) prefix += strs[0][index]
        index++;
    }
    return prefix
  
};