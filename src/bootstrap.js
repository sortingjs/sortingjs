/**
 * Entry point file for the whole application
 */

'use strict';

const TypeEnum       = require('./enum');
const utils          = require('./utils/utils');
const bubbleSort     = require('./sorting/bubbleSort');
const quickSort      = require('./sorting/quickSort');

const ORIGINAL_ARRAY = 'originalArray';
let originArr        = [13, 12, 18, 19, 15, 11];
let originLen        = originArr.length;
utils.print(ORIGINAL_ARRAY, originArr);

let bubbleArr = bubbleSort(originArr);
utils.print(TypeEnum.BUBBLE_SORT, bubbleArr);

let quickArr = quickSort(originArr, 0, originLen - 1);
utils.print(TypeEnum.QUICK_SORT, quickArr);