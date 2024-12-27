const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!"
  }

  try {
    date.getUTCDate();
  } catch (e) {
    throw new Error("Invalid date!");
  }

  if (isNaN(new Date(date).getTime()) || typeof date === "number") {
    throw new Error("Invalid date!")
  }


  const month = date.getMonth()

  const vals = {
    "winter": [11, 0, 1],
    "spring": [2, 3, 4],
    "summer": [5, 6, 7],
    "autumn": [8, 9, 10]
  }

  for (let el of Object.entries(vals)) {
    if (el[1].includes(month)) {
      return el[0]
    }
  }
}

module.exports = {
  getSeason
};
