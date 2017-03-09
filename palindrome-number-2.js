/* 
 ** Leetcode #9:
 ** Language: Javascript
 ** Problem: https://leetcode.com/problems/palindrome-number/
 ** Author: YCmove
 **/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var str = x.toString(),
        leng = str.length,
        flag = true;

    var arr = str.split('');


    if (arr.length === 1) {
        flag = true
        return flag
    }


    do {
        if (arr.pop() !== arr.shift()) {
            flag = false
        }

    } while (arr.length > 1)


    return flag;

};