/**
 * Entry point file for the whole application
 */

'use strict';

const TypeEnum       = require('./enum');
const utils          = require('./utils/utils');
const bubbleSort     = require('./sorting/bubbleSort');
const quickSort      = require('./sorting/quickSort');

const ORIGINAL_ARRAY = 'originalArray';
let originArr        = [13, 12, 19, 11, 17, 16, 15];

// 1. Bubble Sort
let bubbleArr = bubbleSort(originArr);
utils.print(ORIGINAL_ARRAY, originArr);
utils.print(TypeEnum.BUBBLE_SORT, bubbleArr);

// 2. Quick Sort
// Due to quickSort() need to recursively invoke itself, we make a new array for this demo
let quickArr = [3, 2, 1, 4, 7, 5, 6, 8];
let quickLen = quickArr.length;
utils.print(ORIGINAL_ARRAY, quickArr);

quickSort(quickArr, 0, quickLen - 1);
utils.print(TypeEnum.QUICK_SORT, quickArr);