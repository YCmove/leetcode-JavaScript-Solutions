/* 
 ** Leetcode #540:
 ** Language: Javascript
 ** Problem: https://leetcode.com/problems/single-element-in-a-sorted-array/
 ** Author: YCmove
 ** Run Time: 
 **/
/**
 * @param {number[]} nums
 * @return {number}
 */

// var counter = (function () {
//     var count = 0;
//     return function () {
//         return count++
//     }
// })();


var singleNonDuplicate = function (nums) {

    var counter = (function () {
        var count = 0;
        return function () {
            return count++
        }
    })();

    var count = counter();
    var num = nums[count];
    var arr = nums.filter(model => model === num)
    if (arr.length === 1) {
        return num;
    }
    return singleNonDuplicate(nums)

};

console.log(singleNonDuplicate([0, 1, 1]))