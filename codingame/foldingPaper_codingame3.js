/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var order = readline();
var side = readline();

var sideObj = {
    'U': {
        index: 0,
        value: 1,
        next: () => sideObj.L
    },
    'L': {
        index: 1,
        value: 1,
        next: () => sideObj.D
    },
    'D': {
        index: 2,
        value: 1,
        next: () => sideObj.R
    },
    'R': {
        index: 3,
        value: 1,
        next: () => sideObj.U
    }
}

main(order)

function main(str) {
    if (str.length === 1) {
        // second input
        return sideObj[str].value
    } else {
        // first input
        var arr = str.split('')
        arr.map(char => folding(sideObj[char]))
    }
}

function folding(currentObj) {
    currentObj.next().next().value = currentObj.value + currentObj.next().next().value
    currentObj.value = 1
    currentObj.next().value = currentObj.next().value * 2
    currentObj.next().next().next().value = currentObj.next().next().next().value * 2
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(main(side));
