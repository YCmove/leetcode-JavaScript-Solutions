'use strict'

var s = 2

var Mary = {
    s: 5,
    say: function (x) {
        console.log(this.s)
        console.log(x.length)
    }
}

var Kate = {
    s: 13,
    say: function (x) {
        console.log(this.s)
        console.log(x.length)
    }
}

var w = [
    []
]

Mary.say.call(Kate, w)
Kate.say.apply(this, w)
// Kate.say.apply(this, [w])
Mary.say.bind(this)(w)

// ans
// 13 1
// 2 1
// 2 1

// right ans (in broswer)
// 13 1
// 2 0
// 2 1