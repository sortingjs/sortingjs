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
 * @param {Integer} start Starting index
 * @param {Integer} end Ending index
 */
const partition = (arr = [], start, end) => {
  let pivot  = arr[end]; // always find rightmost element as pivot
  let pIndex = start;

  // move all the elements smaller than pivot to the left
  for (let i = start; i < end; i++) {
    // if current element is smaller than the pivot,
    // we swap current element with pIndex element, and increment pIndex
    if (arr[i] <= pivot) {
      // swap arr[i] and arr[pIndex]
      let temp1 = arr[i];
      arr[i] = arr[pIndex];
      arr[pIndex] = temp1;

      pIndex++;
    }
  }

  // swap pIndex element and pivot element
  let temp2 = arr[pIndex];
  arr[pIndex] = arr[end];
  arr[end] = temp2;

  return pIndex;
};

/**
 * The main function to implement quickSort()
 * 
 * @param {Array} arr Array to be sorted
 * @param {Integer} start Starting index
 * @param {Integer} end Ending index
 */
const quickSort = (arr = [], start, end) => {
  // exit the quickSort recursion, if start index is greater or equal to end index
  // at this place, we recursively invoke quickSort when start index is smaller than end index
  if (start < end) {
    // pIndex refers to partition index, arr[pIndex] is now at the right place
    let pIndex = partition(arr, start, end);

    // Recursively sort elements before partition & after partition
    quickSort(arr, start, pIndex - 1);  // before
    quickSort(arr, pIndex + 1, end); // after
  }
};

module.exports = quickSort;