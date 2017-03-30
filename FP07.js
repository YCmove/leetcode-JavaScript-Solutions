'use strict'

/*
 ** Source: [線上讀書會] 德威 主講 function programing higher order function
 ** Language: Javascript
 ** Links: https://www.youtube.com/watch?v=KCK5v2EfF2E
 */

// without writing any new functions, show three ways to create the inc function.
// var inc = ____
// inc(5) -> 6
// inc(inc(5)) -> 7

const addf = require('./FP04-addTwoInvocations')
const lift = require('./FP05')
const curry = require('./FP06-Currying')

// solution 1
var inc = addf(1)

// solution 2
var inc2 = lift(add)(2)

// solution 3
var inc3 = curry(add, 4)

// console.log(inc3(inc3(6)))


function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}