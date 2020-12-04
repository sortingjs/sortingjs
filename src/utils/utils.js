/**
 * A group of utility methods of sorting algorithms
 */

'use strict';

/**
 * Print out current sorting algorithm name & output array
 * 
 * @param {*} sortName sorting algorithm name
 * @param {*} outputArray output array
 */
const print = (sortName, outputArray) => {
  console.log(`${sortName}: `);
  console.log(outputArray);
};

module.exports = {
  print
};