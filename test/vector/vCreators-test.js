/** @license MIT License (c) copyright 2016 original author or authors */

import {describe, it} from 'mocha'
import assert from 'assert'
import {vCreate, vClone, vRandom, vLength, vZeros, vOnes} from '../../src/vector/index'

const roundCheck = (x, y = 1) => x >= -y && x <= y + y

describe('@vCreate()', () => {
  it('creates vector given numbers', () => {
    assert.deepEqual(vCreate(2)(1), [1, 1])
  })
  it('creates vector given array', () => {
    assert.deepEqual(vCreate(2)(), [0, 0])
  })
  it('throws if value of vCreate is not numerical', () => {
    assert.throws(() => vCreate([1])(), 'value should be a number to create a vector')
    assert.throws(() => vCreate('a', 2), 'value should be a number to create a vector')
  })
})
describe('@vClone()', () => {
  it('when given a vector it returns a new vector', () => {
    assert.deepEqual(vClone([1, 2, 3]), [1, 2, 3])
  })
  it('throws if value of vClone is not numerical', () => {
    assert.throws(() => vClone('a'), 'vClone only accepts a valid vector')
  })
})
describe('@vRandom()', () => {
  it('creates random vector values given number', () => {
    const ran = vRandom(1, 4)
    const result = roundCheck(Math.round(vLength(ran)))
    assert.equal(result, true)
    assert.deepEqual(ran.length, 4)
  })
  it('creates random vector using the given scale', () => {
    const scale = 5
    const ran = vRandom(scale, 4)
    const result = roundCheck(Math.round(vLength(ran)), scale)
    assert.equal(result, true)
  })
  it('throws if value is not numerical', () => {
    assert.throws(() => vRandom(['a']), 'value should be a number to create a random vector')
  })
})
describe('@vZeros()', () => {
  it('creates new vector with zeros values', () => {
    assert.deepEqual(vZeros(5), [0, 0, 0, 0, 0])
  })

  it('throws if given a non numerical value', () => {
    assert.throws(() => vZeros([1, 2]), 'vZeros only accepts a number value')
  })
})
describe('@vOnes()', () => {
  it('creates new vector with all values as 1', () => {
    const fiveOnes = [1, 1, 1, 1, 1]
    assert.deepEqual(vOnes(5), fiveOnes)
  })
  it('throws if given a non numerical value', () => {
    assert.throws(() => vOnes([0, 1]), 'vOnes expects a number')
  })
})
