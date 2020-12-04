/**
 * Quick Sorting Algorithms
 */

'use strict';

/**
 * This function takes last element as pivot, place the pivot element at its correct position
 * in sorted array, and places all smaller(smaller than pivot) to left pivot and all greater
 * elements to right of pivot
 * 
 * @param {Array} arr Array to be sorted
 * @param {Integer} low Starting index
 * @param {Integer} high Ending index
 */
const partition = (arr = [], low, high) => {
  let pivot = arr[high];
  let i     = low - 1;

  for (let j = low; j < high; j++) {
    // if current element is smaller than the pivot
    if (arr[j] < pivot) {
      i++;

      // swap arr[i] and arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // swap arr[i + 1] and arr[high]
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
};

/**
 * The main function to implement quickSort()
 * 
 * @param {Array} arr Array to be sorted
 * @param {Integer} low Starting index
 * @param {Integer} high Ending index
 */
const quickSort = (arr = [], low, high) => {
  let sortedArray = [...arr];
  let partitionIndex;

  if (low < high) {
    partitionIndex = partition(arr, low, high);

    quickSort(sortedArray, low, partitionIndex);
    quickSort(sortedArray, partitionIndex + 1, high);
  }

  return sortedArray;
};

module.exports = quickSort;