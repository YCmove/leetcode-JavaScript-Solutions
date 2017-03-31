'use strict'

// input array = [3,4,1,-2,6,9]
// find mid number in the arry

var array1 = [3, 4, 1, -2, 6, 9],
    array2 = [-2, -4, 0, 7, 23, 10, 2, -3]


function findMiddle(inputArr) {

    var midLength = inputArr.length / 2

    var sortedArr = inputArr.map(obj => sort(obj))

    for (var i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i].length === midLength) {
            return inputArr[i]
        }
    }

    function sort(num) {
        return inputArr.filter(obj => obj > num)
    }

}

console.log(findMiddle(array2))