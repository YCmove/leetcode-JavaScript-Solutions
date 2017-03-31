'use strict'

this.name = 'Robin'

var foo = function () {
    this.name = 'fooname'
    return {
        name: 'Matt',
        getName: function () {
            return this.name
        }
    }
}()

// IIFE change global 'Robin' immediately to 'fooname'

console.log(this.name)
console.log(foo.name)
console.log(foo.getName())

// right answer
// fooname
// Matt
// Matt