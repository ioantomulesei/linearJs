/** @license MIT License (c) copyright 2016 original author or authors */

import {isMatrix} from './util/matrix-util'
// import {_curry2} from '../util/fp-utils'
// import {random} from '../util/common-utils'

const mCreate = (...sizes) => initialValue => {
  if (typeof sizes[0] !== 'number') {
    throw new Error('to create a vectors you must use numbers')
  }
  return _mCreate(sizes, initialValue, sizes.length - 1, 0)
}

const _mCreate = (sizes, initialValue, len, index) =>
  Array.from({ length: sizes[index] }, () =>
    index === len ? initialValue : _mCreate(sizes, initialValue, len, index + 1))

/**
 * Generates a copy/clone of given matrix
 *
 * mClone :: [a] -> [a]
 * mClone :: [[1, 2], [1, 2]] -> [[1, 2], [1, 2]]
 *
 * @param {Array} [mtx] matrix
 * @throws if not a valid matrix
 * @returns {Array} a new copy of given matrix
 */
export const mClone = (...mtx) => {
  if (!isMatrix(mtx)) {
    throw new Error('mClone() only accepts a matrix')
  }
  return Array.from(mtx[0])
}

/**
 * Generates a random matrix with the given scale which is set to 1 if empty.
 * Takes a number which dictates the length of vector given back or
 * converts an existing vector into random numbers
 *
 * mRandom :: ([a] -> [a]) (a -> [a])
 * mRandom :: ([0] -> [0.294850]) (2 -> [0.294850, -0.3084532])
 *
 * @param {Number} scale: the scale you want to randomise the matrix
 * @param {Number} sizes of an array or number to randomise
 * @throws if values is not a valid numerical number
 * @returns {Array} vector with random numbers
 */
// TODO: once mlength is completed, will be able to write tests
// export const mRandom = _curry2((scale = 1.0, ...value) => {
//   if (typeof value[0] !== 'number') {
//     throw new Error('to create a vectors you must use numbers')
//   }
//   return _mRandom(value, value.length - 1, 0, scale)
// })
//
// const _mRandom = (value, len, index, scale) =>
//   Array.from({ length: value[index] },
//     (a, i) => index === len ? random(i, scale) : _mRandom(value, len, index + 1, scale)
//   )

/**
 * Generates an identity matrix.
 * Takes a number which dictates the size of the indentity matrix returned.
 *
 * mIndentity :: Num -> [a]
 * mIndentity :: 2 -> [[1, 0], [0, 1]]
 *
 * @param {Number} n: size of identity matrix
 * @throws if values is not a valid numerical number
 * @returns {Array} identity matrix
 */
// TODO: fix the complexity issue of this function
/* eslint-disable complexity */
export const mIdentity = n => {
  if (typeof n !== 'number') {
    throw new Error('to create an identity matrix you must use a number')
  }
  let els = new Array(n)
  let i = n
  let j

  while (i--) {
    j = n
    els[i] = new Array(n)

    while (j--) {
      els[i][j] = (i === j) ? 1 : 0
    }
  }
  return els
}

/**
 * mZeros - Generates zeros from given numbers
 *
 * mZeros :: a, b -> [[a]]
 * mZeros :: 2, 2 -> [[0, 0], [0, 0]]
 *
 * @param {Number} args number
 * @throws if arguments are not numbers
 * @returns {Array} a new matrix with zeros
 */
export const mZeros = (...args) => mCreate(...args)(0)

/**
 * mOnes - Generates ones from given numbers
 *
 * mOnes :: a, b -> [[a]]
 * mOnes :: 2, 2 -> [[1, 1], [1, 1]]
 *
 * @param {Number} args number
 * @throws if arguments are not numbers
 * @returns {Array} a new matrix with zeros
 */
export const mOnes = (...args) => mCreate(...args)(1)
