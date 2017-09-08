const { runTests } = require('./../utils.js')
const { testCases } = require('./testCases.json')

// given an array and arguments
// return an array that has those arguments removed

// case:
// [1, 2 ,3], 0, 1

// returns:
// [2, 3]

function removeArgs(arr, ...args) {}

runTests(removeArgs, testCases)
