const { runTests, compose } = require('./../utils.js')
const { testCases } = require('./testCases.json')

// given an array of arrays
// return an array containing the largest number from each sub array
// empty sub arrays should be removed from the result

// case:
// [ [-1, -1, -1], [], [0, 1, 2, 3, 4, 5] ]

// returns:
// [-1, 5]

function findLargest(arrays) {}

runTests(findLargest, testCases)
