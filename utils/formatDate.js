// import third-party npm package
import dayjs from 'dayjs';

// import plugin (ninja bonus)
import relativeTime from 'dayjs/plugin/relativeTime.js';
// install plugin
dayjs.extend(relativeTime);

/**
 * Formats an ISO date string.
 * ex. output: Thursday, January 21, 2023
 * @param {string} isoDate The ISO date string to format.
 * @returns {string} The formatted ISO date.
 */
function formatLong(isoDate) {
  return dayjs(isoDate).format('dddd MMMM D, YYYY');
}

/**
 * Formats an ISO date string.
 * ex. output: 01/21/2023
 * @param {string} isoDate The ISO date string to format.
 * @returns {string} The formatted ISO date.
 */
function formatShort(isoDate) {
  return dayjs(isoDate).format('MM/DD/YYYY');
}

/**
 * Formats an ISO date string.
 * ex. output: 4 months ago
 * @param {string} isoDate The ISO date string to format.
 * @returns {string} The formatted ISO date.
 */
function formatRelative(isoDate) {
  return dayjs().to(dayjs(isoDate));
}

export { formatLong, formatShort, formatRelative };
