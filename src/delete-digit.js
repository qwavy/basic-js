const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n)
  let minNum = Math.min(...str.split(""))

  let indexMinNum = str.indexOf(String(minNum))

  let res = str.split("")
  res.splice(indexMinNum, 1)
  let num1 = +res.join("") 

  let secondMin = Math.min(...res)
  let indexSecondMin = str.indexOf(String(secondMin))

  let res2 = str.split("")
  res2.splice(indexSecondMin,1)

  let num2 = +res2.join("")

  return num1 > num2 ? num1 : num2 

}

module.exports = {
  deleteDigit
};
