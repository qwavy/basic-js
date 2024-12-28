const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {




  if(!options.repeatTimes){
    return str += options.addition
  }

  if(!options.additionSeparator){
    options.additionSeparator = "|"
  }

  if(!options.separator){
    options.separator = "+"
  }

  if(!options.additionRepeatTimes && options.addition){
    options.additionRepeatTimes = 1
  }

  if(typeof options.separator !== "string"){
    options.separator = String(options.separator)
  }
  if(typeof options.addition !== "string"){
    options.addition = String(options.addition)
  }
  if(typeof options.additionSeparator !== "string"){
    options.additionSeparator = String(options.additionSeparator)
  }

  let result = ""
  for (let i = 0; i < options.repeatTimes; i++) {
      let myStr = str
      for (let j = 0; j < options.additionRepeatTimes; j++) {
          myStr += options.addition
          if (j < options.additionRepeatTimes - 1) {
              myStr += options.additionSeparator
          }
      }
      if(i < options.repeatTimes - 1){
          myStr += options.separator
      }
      result += myStr
  }

  return result
}

module.exports = {
  repeater
};
