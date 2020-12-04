/**
 * A group of utility methods of sorting algorithms
 */

'use strict';

/**
 * Print out current sorting algorithm name & output array
 * 
 * @param {*} sortName sorting algorithm name
 * @param {*} resultArray output array
 */
const printResult = (sortName, resultArray) => {
  console.log(`${sortName}: `);
  console.log(resultArray);
};

module.exports = {
  printResult
};