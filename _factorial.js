/**
 ** Language: Javascript
 ** Author: YCmove
 ** Run Time: 
 **/

// 計算 1*2*3*4...*(n-1)*n

// Solution 1
function calculate(x) {
    var array = []
    for (var i = 1; i <= x; i++) {
        array.push(i)
    }

    var result = array.reduce((prev, next) => prev * next)

    return result;
}

// Solution 2
function calculate(x) {
    if (x === 0) {
        return 1;
    }
    if (x < 0) {
        return undefined;
    }
    for (var i = x; --i;) {
        x *= i;
    }
    return x;
}

// Solution 3
function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

// console.log(factorial(4));