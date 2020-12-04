/**
 * Entry point file for the whole application
 */

'use strict';

const TypeEnum   = require('./enum');
const utils      = require('./utils/utils');
const bubbleSort = require('./sorting/bubbleSort');
const quickSort  = require('./sorting/quickSort');

let originArr    = [13, 12, 18, 19, 15, 11];

let bubbleArr = bubbleSort(originArr);
utils.print(TypeEnum.BUBBLE_SORT, bubbleArr);

let quickArr = quickSort(originArr);
utils.print(TypeEnum.QUICK_SORT, quickArr);