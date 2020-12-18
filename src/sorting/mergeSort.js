'use strict';

/**
 * merge two subarrays of arr,
 * first subarray is arr[1, ..., middle],
 * second subarray is arr[middle+1, ..., end]
 * 
 * @param {*} arr array
 * @param {*} start start index
 * @param {*} middle middle index
 * @param {*} end end index
 */
const merge = (arr = [], start, middle, end) => {

};

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