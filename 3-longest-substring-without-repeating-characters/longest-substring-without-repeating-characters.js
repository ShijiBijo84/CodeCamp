/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  if (str.length === 0) return 0
  const traverseString = (parentStr) => {
    var charSet = new Set(parentStr[0]);
    const strLen = parentStr.length;
    let i = 1;
    while (i < strLen) {
      if (charSet.has(parentStr[i])) {
        break;
      } else charSet.add(parentStr[i]);
      i++;
    }
    return i;
  }
  let prevLen = 0;
  for (let i = 0; i < str.length; i++) {
    let childStr = str.substring(i);
    currentSubLength = traverseString(childStr)
    if (prevLen < currentSubLength) prevLen = currentSubLength
  }
  return prevLen;
};
