/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var order = readline();
var side = readline();

var sideArray = [
    {
        name: 'U',
        value: 1,
        next: () => sideArray[1]
    },
    {
        name: 'L',
        value: 1,
        next: () => sideArray[2]
    },
    {
        name: 'D',
        value: 1,
        next: () => sideArray[3]
    },
    {
        name: 'R',
        value: 1,
        next: () => sideArray[0]
    }
]


console.log('order:', order)
console.log('side:', side)
main(order)

function main(str) {
    if (str.length === 1) {
        // second(final) input goes here
        var currentObj = sideArray.filter(obj => {
            return obj.name === str
        })[0]
        // console.log('final sideArray: ', sideArray)
        return currentObj.value

    } else {
        // first input will go here
        var arr = str.split('')
        arr.map(char => mapping(char, sideArray))
    }
}

function mapping(char, arr) {
    switch (char) {
        case 'U':
            fold(0, arr)
            break
        case 'L':
            fold(1, arr)
            break
        case 'D':
            fold(2, arr)
            break
        case 'R':
            fold(3, arr)
            break
        default:
            console.error('not legal charactar')
    }
}

function fold(index, sideArray) {
    sideArray[index].next().next().value = sideArray[index].value + sideArray[index].next().next().value
    sideArray[index].value = 1
    sideArray[index].next().value = sideArray[index].next().value * 2
    sideArray[index].next().next().next().value = sideArray[index].next().next().next().value * 2

    // console.log('each fold: \n', sideArray)
}


// Write an action using print()
// To debug: printErr('Debug messages...');

print(main(side));
