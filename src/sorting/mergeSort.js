'use strict';

/**
 * Merge two subarrays of arr,
 * first subarray is arr[1, ..., middle],
 * second subarray is arr[middle+1, ..., end]
 * 
 * @param {*} arr array
 * @param {*} start start index
 * @param {*} middle middle index
 * @param {*} end end index
 */
const merge = (arr = [], start, middle, end) => {
  // Find lengths of two subarrays to be merged
  let n1 = middle - start + 1;
  let n2 = end - middle;

  // Create temp arrays - left half & right half
  let Left  = [];
  let Right = [];

  // Copy data to temp arrays
  for (let i = 0; i < n1; i++) {
    Left[i] = arr[start + i];
  }
  for (let j = 0; j < n2; j++) {
    Right[j] = arr[middle + 1 + j];
  }

  //----------------------
  // Merge the temp arrays
  //----------------------
  
  // initialize indexes of first and second subarrays, and index of merged subarray
  let i = 0;     // index of temp left array
  let j = 0;     // index of temp right array
  let k = start; // index of sorted array

  //--------------------------------------------------------
  // the following 3 while loop would produce a sorted array
  //--------------------------------------------------------
  while (i < n1 && j < n2) {
    if (Left[i] <= Right[j]) {
      arr[k] = Left[i];
      i++;
    } else {
      arr[k] = Right[j];
      j++;
    }
    k++;
  }

  // note: only one of the following while loop will be executed
  // 1. copy remaining elements of L if any
  while (i < n1) {
    arr[k] = Left[i];
    i++;
    k++;
  }

  // 2. copy remaining elements of R if any
  while (j < n2) {
    arr[k] = Right[j];
    j++;
    k++;
  }
};

/**
 * Main function that implements mergeSort()
 * 
 * @param {*} arr array
 * @param {*} start start index
 * @param {*} end end index
 */
const mergeSort = (arr = [], start, end) => {
  if (start < end) {
    // find the middle point
    let middle = Math.floor((start + end) / 2);

    // sort first and second halves
    // recursively call mergeSort() till start < end
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);

    // merge the sorted halves
    merge(arr, start, middle, end);
  }
};

module.exports = mergeSort;