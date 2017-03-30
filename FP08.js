'use strict'

/*
 ** Source: [線上讀書會] 德威 主講 function programing higher order function
 ** Language: Javascript
 ** Links: https://www.youtube.com/watch?v=KCK5v2EfF2E
 */

// write a function addg that adds from many invocations,
// until it sees an empty invocation.
// addg() -> undefined
// addg(2)() -> 2
// addg(2)(7)() -> 9
// addg(3)(0)(4)(3)() -> 10

function addg(first) {
    if (first === undefined) return
    return function next() {

    }
}