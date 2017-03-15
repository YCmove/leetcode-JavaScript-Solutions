'use strict'

// find the second large number in the array

let arr = [10, 44, 23, 30, 3, 17, 6, 51, 4, 44, 4]

function findSecond(arr) {
    if (arr.length === 0) return false
    if (arr.length === 1) return false

    let first = arr[0],
        second = arr[1],
        splicedArr = null

    console.log('first, second, arr: ', first, second, arr)

    if (first === second) return false
    if (arr.length === 2) return first > second ? second : first

    if (first > second) {
        splicedArr = arr.splice(1, 1)
        return findSecond(arr)
    } else {
        splicedArr = arr.splice(0, 1)
        return findSecond(arr)
    }

}

console.log(findSecond(arr))