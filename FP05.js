'use strict'

/*
 ** Source: [線上讀書會] 德威 主講 function programing higher order function
 ** Language: Javascript
 ** Links: https://www.youtube.com/watch?v=KCK5v2EfF2E
 */

// write a function liftf that takes a binary function, and makes it callable with two invocations.

// var addf = liftf(add)
// addf(3)(4) -> 7
// liftf(mul)(5)(6) -> 30

function liftf(func) {
    return function (a) {
        return function (b) {
            return func(a, b)
        }
    }
}


// console.log(liftf(mul)(5)(6))



function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

module.exports = liftf;