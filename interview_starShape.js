'use strict'

// what's the output ?

var line = 5,
    symbol = '*'

for (var i = 0; i < line; i++) {
    for (var j = 0; j < line - i; j++) {
        console.log(symbol) // document.write
    }
    console.log('/n')
}