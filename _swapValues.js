'use strict'

var a = 2,
    b = 4;

// NodeJS Version
(function () {
    let self = global
    return function swap(x, y) {
        self.a = y
        self.b = x
        console.log('self change: ', self.a, self.b) // 4 ,2
    }
})(global)(a, b) // no need to pass global object ?

console.log('after change: ', a, b) // still 2, 4


// Web broswer Version
// var a = 2,
//     b = 4;

// (function () {
//     let self = this
//     return function swap(x, y) {
//         self.a = y
//         self.b = x
//         console.log('self change: ', self.a, self.b) // 4 ,2
//     }
// })(this)(a, b)
// console.log('after change: ', a, b) // still 2, 4