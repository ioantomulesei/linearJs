/** @license MIT License (c) copyright 2016 original author or authors */

// loop through all array elements to check if they ar numbers
const allNumbers = v => {
  for (let i = 0; i < v.length; ++i) {
    if (!isNumber(v[i])) {
      return false
    }
  }
  return true
}

// is the array being passed a nested array
const isNested = v => Array.isArray(v[0]) ? false : isValidNumbers(v)

// is element number
export const isNumber = x => typeof x === 'number'

// check for valid numbers
export function isValidNumbers (v) {
  return (!v) ? false : allNumbers(v)
}

// check if the vector is valid
export function isValidVector (v) {
  return Array.isArray(arguments[0]) && arguments.length === 1
    ? isNested(v) : false
}
