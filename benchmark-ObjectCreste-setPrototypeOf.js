'use strict'

const Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

var man, woman,kid;

var Person = {
    say: function () {
        console.log(this.name)
    }
}
    // .add('Object.create', () => {
    //  woman = Object.create(Person)
    // })

suite
    .add('Object.setPrototypeOf', () => {
        Object.setPrototypeOf(man, Person)
    })
    .add('Object.__proto__', () => {
        kid.__proto__ = Person.prototype
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({
        'async': true
    });

// output
// parseInt x 44,969,331 ops/sec ±1.40% (87 runs sampled)
// Math.floor x 107,089,116 ops/sec ±1.78% (88 runs sampled)
// Fastest is Math.floor