'use strict'

function doSomething() {
    var a = 3

    function cool(b) {
        a = a + b
        console.log(a)
    }

    return cool

}

var foo = doSomething()

foo(20);
foo(30);
(doSomething())(10);

// right answer
// 23
// 53
// 13