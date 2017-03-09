/* 
 ** Leetcode #9:
 ** Language: Javascript
 ** Problem: https://leetcode.com/problems/palindrome-number/
 ** Author: YCmove
 ** Run Time: 366ms
 **/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var str = x.toString(),
        leng = str.length,
        flag = true;

    for (var i = 0; i < leng; i++) {
        if (str[i] !== str[leng - 1 - i]) {
            flag = false
            break;
        }
    }
    return flag;

};