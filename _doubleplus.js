/**
 ** Language: Javascript
 ** Problem: https://leetcode.com/problems/
 ** Author: YCmove
 ** Run Time: 
 **/
// 平方後相加

function calculate(x) {

    var result = x.map(num => num * num)
        .reduce((prev, next) => prev + next)

    return result;
}

// console.log(calculate([2, 3, 0, 2]));