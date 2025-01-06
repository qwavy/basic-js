const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.count = 2
    this.arrDepth = 1
    this.maxArrDepth = 1
    this.flat = true
  }
  calculateDepth(arr) {
    if (!arr.some((element) => Array.isArray(element))) {
      this.arrDepth = 0
      return this.count
    }
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.arrDepth++
        this.flat = false
        if (this.arrDepth > this.maxArrDepth) {
          this.count++
          this.maxArrDepth = this.arrDepth
        }
        this.calculateDepth(arr[i])
      }
    }
    return this.count
  }
}

module.exports = {
  DepthCalculator
};
