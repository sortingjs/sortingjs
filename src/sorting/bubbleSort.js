/**
 * Bubble Sorting Algorithm
 */

'use strict';

/**
 * The main function that implements bubbleSort()
 * 
 * @param {Array} arr input array
 */
const bubbleSort = (arr = []) => {
  let sortedArray = [...arr];
  let n = sortedArray.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        // swap arr[j + 1] and arr[j]
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
};

module.exports = bubbleSort;