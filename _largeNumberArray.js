/* 
 ** Leetcode #:
 ** Language: Javascript
 ** Problem: https://leetcode.com/problems/
 ** Author: YCmove
 ** Run Time: 
 **/
// input array is a large array which was sorted by number

'use strict'

var inputAaary1 = [0, 0, 1, 2, 3, 3, 3, 5, 7, 7, 7, 8, 8, 11, 12, 12, 12, 12]
var inputAaary2 = [0, 0]
var inputAaary2 = [3, 4, 6, 6, 7]


console.log(count(3, inputAaary1));

function count(x, arr) {

    // console.log('input array : ', arr)

    var arrLength = arr.length
    var small = arr[0]
    var big = arr[arrLength - 1]

    if (small === big) {
        // all the same number condition
        return small === x ? arr.length : false

    } else if (x < small || x > big) {
        // check boundary condition
        return false
    } else if (x === small) {
        return boundaryCount(x, arr)
    } else if (x === big) {
        return boundaryCount(x, arr.reverse())
    }

    function boundaryCount(x, arr) {
        for (let i = 0; i < arrLength - 1; i++) {
            if (arr[i] !== x) {
                return i
            }
        }
    }

    // seperate array into two sub array
    // TODO: use ES6 Features
    var arrA = arr // use Object.create ?
    var arrB = arrA.splice(arrLength / 2)

    // console.log('A and B : ', arrA, arrB)

    if (x < arrB[0]) {
        return count(x, arrA)
    } else {
        return count(x, arrB)
    }


}