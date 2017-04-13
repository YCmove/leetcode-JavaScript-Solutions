'use strict'

const Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

var num = 23423

suite.add('parseInt', () => {
        parseInt(num / 10)
    })
    .add('Math.floor', () => {
        Math.floor(num / 10)
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