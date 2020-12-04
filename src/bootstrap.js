/**
 * Entry point file for the whole application
 */

'use strict';

const TypeEnum   = require('./enum');
const utils      = require('./utils/utils');
const bubbleSort = require('./bubbleSort');

let originArr    = [13, 12, 18, 19, 15, 11];

let bubbleArr = bubbleSort(originArr);
utils.printResult(TypeEnum.BUBBLE_SORT, bubbleArr);