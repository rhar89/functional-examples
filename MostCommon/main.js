const { runTests, compose } = require('./../utils.js')
const { testCases } = require('./testCases.json')

// given a string
// return the most frequent word in the string
// words are separated by spaces
// word are all lower case
// you can assume that there will be a most common word (no ties)

// case:
// 'a long time ago in a galaxy far far away'

// returns:
// 'far'

function mostCommon(str) {}

runTests(mostCommon, testCases)
