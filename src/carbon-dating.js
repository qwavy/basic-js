const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(isNaN(+sampleActivity) || typeof +sampleActivity === "string"){
    return false
  }

  if(+sampleActivity < 1 && +sampleActivity > MODERN_ACTIVITY){
    return false
  }
  
  const activityNum = +sampleActivity

  const decayConstant = Math.LN2 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / activityNum) / decayConstant;

  return Math.ceil(age);
}

module.exports = {
  dateSample
};
