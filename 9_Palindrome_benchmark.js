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
        palin1(num2)
    })
    .add('palin2', () => {
        palin2(num2)
    })
    .add('palin3', () => {
        palin2(num2)
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
// palin1 x 29,152,588 ops/sec ±2.27% (85 runs sampled)
// palin2 x 8,657,013 ops/sec ±0.99% (88 runs sampled)
// palin3 x 8,334,507 ops/sec ±1.29% (85 runs sampled)
// Fastest is palin1