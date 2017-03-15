'use strict'


var arr = [3, 0, 1, 1, 1, 2, 4, 3, 4, 5, 6, 5, 9, 10, 10]

// output [0,1,2,3,4,5,6,9,10]

function unique(x) {
    var filteredArray = []
    for (var i = 0; i < x.length; i++) {
        // console.log('filteredArray:', filteredArray)
        if (filteredArray.indexOf(x[i]) === -1) {
            filteredArray.push(x[i])
        }
    }
    return filteredArray
}

// console.log(unique(arr))