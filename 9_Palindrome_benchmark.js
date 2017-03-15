'use strict'

const Benchmark = require('benchmark')
const palin1 = require('./9_Palindrome-Number-1.js')
const palin2 = require('./9_Palindrome-Number-2.js')
const palin3 = require('./9_Palindrome-Number-3.js')

var suite = new Benchmark.Suite;

// console.log(palin1(112251222211))
var num1 = 5566112116655
var num2 = 121

suite.add('palin1', () => {
        palin1(num1)
    })
    .add('palin2', () => {
        palin2(num1)
    })
    .add('palin3', () => {
        palin3(num1)
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
// var num1 = 5566112116655
// palin1 x 11,065,281 ops/sec ±0.65% (89 runs sampled)
// palin2 x 4,423,035 ops/sec ±1.36% (82 runs sampled)
// palin3 x 829,759 ops/sec ±1.47% (84 runs sampled)
// Fastest is palin1

// output
// var num2 = 121
// palin1 x 29,468,782 ops/sec ±0.90% (86 runs sampled)
// palin2 x 8,583,063 ops/sec ±0.67% (90 runs sampled)
// palin3 x 2,150,013 ops/sec ±1.42% (91 runs sampled)
// Fastest is palin1