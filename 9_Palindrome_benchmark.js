'use strict'

const Benchmark = require('benchmark')
const palin1 = require('./9_Palindrome-Number-1.js')
const palin2 = require('./9_Palindrome-Number-2.js')
const palin3 = require('./9_Palindrome-Number-3.js')
const palin4 = require('./9_Palindrome-Number-4.js')

var suite = new Benchmark.Suite;

// console.log(palin1(112251222211))
var num1 = 5566112116655
var num2 = 242

suite.add('palin1', () => {
        palin1(num2)
    })
    .add('palin2', () => {
        palin2(num2)
    })
    .add('palin3', () => {
        palin3(num2)
    })
    .add('palin4', () => {
        palin4(num2)
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
// palin1 x 11,910,850 ops/sec ±0.71% (89 runs sampled)
// palin2 x 4,982,405 ops/sec ±0.81% (91 runs sampled)
// palin3 x 867,994 ops/sec ±1.09% (89 runs sampled)
// palin4 x 94,022,369 ops/sec ±0.70% (92 runs sampled)
// Fastest is palin4

// output
// var num2 = 242
// palin1 x 31,799,298 ops/sec ±0.89% (88 runs sampled)
// palin2 x 8,645,134 ops/sec ±1.12% (89 runs sampled)
// palin3 x 2,153,386 ops/sec ±1.63% (88 runs sampled)
// palin4 x 32,000,894 ops/sec ±0.85% (89 runs sampled)
// Fastest is palin4,palin1