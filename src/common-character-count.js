const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split("")
  const arr2 = s2.split("")
  const allLeters = arr1.concat(arr2)

  let lengthRn = allLeters.length
  let futureLength = allLeters.length

  allLeters.forEach((el,i) => {
    let arr1Index = arr1.indexOf(el)
    let arr2Index = arr2.indexOf(el)
    if(arr1Index !== -1 && arr2Index !== -1){
      arr1.splice(arr1Index,1)
      arr2.splice(arr2Index,1)

      futureLength--
    }
  })

  return lengthRn - futureLength

}

module.exports = {
  getCommonCharacterCount
};
