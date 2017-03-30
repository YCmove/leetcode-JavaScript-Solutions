'use strict'
/* 
 ** Leetcode #7:
 ** Language: Javascript
 ** Problem: https://leetcode.com/problems/reverse-integer
 ** Author: YCmove
 ** Run Time: 158ms
 **/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var newNum = x.toString().split('').reverse()

    if (x < 0) {
        newNum.pop()

    }

    var joinedNum = newNum.join('')

    if (+joinedNum >= 2147483648) {
        return 0;
    }

    return x < 0 ? -joinedNum : +joinedNum


};