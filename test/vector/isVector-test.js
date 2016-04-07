/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'

import {isVector} from '../../src/vector/isVector'

describe('@isVector()', () => {
  it('throws if empty', () => {
    assert.throws(() => isVector(), 'Error: A value is needed for a vector')
  })
  it('throws if not given a vector that is an array', () => {
    assert.throws(() => isVector('vector'), 'A vector can only be of numerical values')
  })
  it('throws if all element of vector are not numbers', () => {
    assert.throws(() => isVector([1, 2, 'a']), 'A vector can only be of numerical values')
  })
  it('throws if vector is a matrix', () => {
    assert.throws(() => isVector([[1, 2], [1, 2], [1, 2]]), 'A vector can only be a array with ' +
      'more than 2 values `[1, 2]`, it cannot be: a single number `1`, ' +
      'nested arrays, or a matrix')
  })
  it('returns true if given an array and all elements are numbers', () => {
    assert.strictEqual(isVector([1, 2, 3]), true)
  })
})
