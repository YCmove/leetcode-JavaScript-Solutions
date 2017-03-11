/* 
 ** Leetcode #231:
 ** Language: Javascript
 ** Problem: https://leetcode.com/problems/power-of-two
 ** Author: YCmove
 ** Run Time: 126ms
 **/
/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function (n) {
    return n % 2 || n === 0 ? (n === 1 ? true : false) : isPowerOfTwo(n / 2);
};