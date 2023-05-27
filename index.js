// import npm package for colorizing logs
import chalk from 'chalk';

// Named imports from custom module
import { formatLong, formatShort, formatRelative } from './lib/formatDate.js';

// Create ISO date strings using JS Date library,
// https://timestampgenerator.com/,or just writing
// it out manually
const isoNow = new Date().toISOString();
const isoBirthday = new Date('September 25, 1990');
const isoDate1 = '2023-05-27T20:26:33+0000';
const isoDate2 = '2023-04-21T09:40:26+0000';
const isoDate3 = '2023-06-03T19:00:14+0000';
const isoDate4 = '2023-01-21T00:00:00+0000';

// create array of ISO date strings for looping
const isoDates = [isoNow, isoBirthday, isoDate1, isoDate2, isoDate3, isoDate4];

/**
 * This callback type is called `formatCallback`.
 * Defined here for use in jsdoc below.
 * @callback formatCallback
 * @param {string} isoDate The ISO date string to format
 */

/**
 * Takes in an array of ISO date strings and returns an array of
 * formatting strings using the specified format callback.
 * @param {string[]} isoDates The array of ISO date strings to format.
 * @param {formatCallback} cb The formatter callback function to apply.
 * @returns {string[]} An array of formatted strings.
 */
function createDates(isoDates, cb) {
  const formattedDates = isoDates.map((date) => {
    return cb(date);
  });
  return formattedDates;
}

const longDates = createDates(isoDates, formatLong);
const shortDates = createDates(isoDates, formatShort);
const relativeDates = createDates(isoDates, formatRelative);

console.log(chalk.bgCyanBright('Long dates:'));
longDates.forEach((isoDate) => console.log(isoDate));

console.log(chalk.bgCyanBright('Short dates:'));
shortDates.forEach((isoDate) => console.log(isoDate));

console.log(chalk.bgCyanBright('Relative dates:'));
relativeDates.forEach((isoDate) => console.log(isoDate));
