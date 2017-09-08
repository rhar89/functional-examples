const compose = (...funcs) => {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((prev, curr) => (...args) => prev(curr(...args)))
}

const pipe = (...funcs) => {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduceRight((prev, curr) => (...args) => prev(curr(...args)))
}

const runTests = (func, testCases) => testCases.forEach((testCase) => {
  const args = JSON.stringify(testCase.args).slice(1, -1)
  const expected = JSON.stringify(testCase.solution)
  const result = JSON.stringify(func(...testCase.args))

  console.log(`
    CASE: ${args}
    EXPECTED: ${expected}
    RESULT: ${result}
    ${expected === result ? 'PASS' : 'FAIL'}
  `)
})

exports.compose = compose
exports.pipe = pipe
exports.runTests = runTests
