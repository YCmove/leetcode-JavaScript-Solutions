'use strict'

var x = 9;

(function () {
    console.log('inner x = ', x)
    var x = 20
    console.log('inner after x = ', x)
})()

console.log('outer x = ', x)

// right answer
// inner x = undefined
// inner after x = 20
// outer x = 9