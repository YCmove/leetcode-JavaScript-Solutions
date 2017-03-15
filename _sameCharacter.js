'use strict'

let a = "scsope",
    b = "soepsc"

// output true/false

function checkSameCharacter(a, b) {
    let lenA = a.length
    let lenB = b.length
    if (lenA !== lenB) return false

    let arrA = a.split('').sort(),
        arrB = b.split('').sort(),
        flag = true

    for (let i = 0; i < lenA; i++) {
        if (arrA[i] !== arrB[i]) {
            flag = false
            break
        }
    }

    return flag
}

console.log(checkSameCharacter(a, b))