'use strict'

/*
 ** Source: [線上讀書會] 德威 主講 function programing higher order function
 ** Language: Javascript
 ** Links: https://www.youtube.com/watch?v=KCK5v2EfF2E
 */

// Curring
// taking a function with multiple arguments(add, mul)
// and turning it into multiple functions that 
// take a single argument is called curring.


// curry(mul)(5)(6) -> 30

function curry(binery) {
    return function (first) {
        return function (second) {
            return binery(first, second)
        }
    }
}

function curryExt(binery) {
    return function (...first) {
        return function (...second) {
            return binery(...first, ...second)
        }
    }
}

// console.log(curry(add)(5)(6))
// console.log(curryExt(add)(5, 2, 1)(3, 3))

function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

module.exports = curry;