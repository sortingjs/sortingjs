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
const merge = (arr = [], l, m, r) => {
  // Find sizes of two subarrays to be merged
  let n1 = m - l + 1;
  let n2 = r - m;

  // Create temp arrays
  let L = [];
  let R = [];

  // Copy data to temp arrays
  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  // Merge the temp arrays
  
  // initialize indexes of first and second subarrays
  let i = 0;
  let j = 0;

  // initialize index of merged subarray
  let k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[j];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // copy remaining elements of L if any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // copy remaining elements of R if any
  while (j < n2) {
    arr[k] = R[j];
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
    let middle = (start + end) / 2;

    // sort first and second halves
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);

    // merge the sorted halves
    merge(arr, start, middle, end);
  }
};

module.exports = mergeSort;