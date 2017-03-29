'use strict'

/*
 ** Source: [線上讀書會] 德威 主講 function programing higher order function
 ** Language: Javascript
 ** Links: https://www.youtube.com/watch?v=KCK5v2EfF2E
 */

// write a function addf that adds from two invocations
// addf(3)(4) -> 7

function addf(first) {
    return function (second) {
        return first + second
    }
}

// console.log(addf(3)(10))