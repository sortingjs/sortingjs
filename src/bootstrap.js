/**
 * Entry point file for the whole application
 */

'use strict';

const TypeEnum       = require('./enum');
const utils          = require('./utils/utils');
const bubbleSort     = require('./sorting/bubbleSort');
const quickSort      = require('./sorting/quickSort');
const mergeSort      = require('./sorting/mergeSort');

const ORIGINAL_ARRAY = 'originalArray';
let originArr        = [13, 12, 19, 11, 17, 16, 15];

// 1. Bubble Sort
let bubbleArr = bubbleSort(originArr);
utils.print(ORIGINAL_ARRAY, originArr);
utils.print(TypeEnum.BUBBLE_SORT, bubbleArr);

// 2. Quick Sort
// Due to quickSort() needs to recursively invoke itself, we make a new array for this demo
let quickArr = [3, 2, 1, 8, 7, 5, 6, 4];
let quickLen = quickArr.length;
utils.print(ORIGINAL_ARRAY, quickArr);

quickSort(quickArr, 0, quickLen - 1);
utils.print(TypeEnum.QUICK_SORT, quickArr);

// 3. Merge Sort
// Due to mergeSort() needs to recursively invoke itself, we make a new array for it too
let mergeArr = [12, 14, 15, 11, 13, 17, 16];
let mergeLen = mergeArr.length;
utils.print(ORIGINAL_ARRAY, mergeArr);

mergeSort(mergeArr, 0, mergeLen - 1);
utils.print(TypeEnum.MERGE_SORT, mergeArr);