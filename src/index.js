import _ from "lodash"

export const BOOLEAN   = Symbol("boolean")
export const ARRAY     = Symbol("array")
export const FUNCTION  = Symbol("function")
export const NULL      = Symbol("null")
export const NUMBER    = Symbol("number")
export const OBJECT    = Symbol("object")
export const REGEXP    = Symbol("regexp")
export const STRING    = Symbol("string")
export const UNDEFINED = Symbol("undefined")
export const UNKNOWN   = Symbol("unknown")
export const ANY       = Symbol("any")

function checker (func, symb) {
  return function (v) {
    return func(v) || v === symb
  }
}

export const isBoolean   = checker(_.isBoolean,   BOOLEAN)
export const isArray     = checker(_.isArray,     ARRAY)
export const isFunction  = checker(_.isFunction,  FUNCTION)
export const isNull      = checker(_.isNull,      NULL)
export const isNumber    = checker(_.isNumber,    NUMBER)
export const isObject    = checker(_.isObject,    OBJECT)
export const isRegExp    = checker(_.isRegExp,    REGEXP)
export const isString    = checker(_.isString,    STRING)
export const isUndefined = checker(_.isUndefined, UNDEFINED)
export const isAny       = v => true

function isLiteral (v) {
  switch (v) {
    case BOOLEAN:
    case ARRAY:
    case FUNCTION:
    case NULL:
    case NUMBER:
    case OBJECT:
    case REGEXP:
    case STRING:
    case UNDEFINED:
    case UNKNOWN:
    case ANY:
      return true
    default:
      return false
  }
}

function theTypes () {
  return [
    [STRING,    isString],
    [NUMBER,    isNumber],
    [FUNCTION,  isFunction],
    [ARRAY,     isArray],
    [REGEXP,    isRegExp],
    [OBJECT,    isObject],
    [BOOLEAN,   isBoolean],
    [UNDEFINED, isUndefined],
    [NULL,      isNull],
  ]
}

export function whatType (v) {
  let types = theTypes()

  __loop: while (1) {
    if (!types.length) return UNKNOWN
    const [ type, isType ] = types.shift()
    if (isType(v)) return type
    continue __loop
  }
}

export function shallowShape (a, b) {
  if (isLiteral(a) || isLiteral(b)) return whatType(a) === whatType(b)
  if (isArray(a) || isArray(b)) return _.all(_.zipWith(a, b, shallowShape))
  return a === b
}

function etra (args, patterns=[]) {
  if (!patterns.length) throw new Error("etre: Non-Exhaustive Patterns")
  const [ pat, func ] = patterns.shift()
  if (shallowShape(pat, args)) return func(...args)
  return etra(args, paterns)
}

export default function (...patterns) {
  return function (...args) {
    for (let group of patterns) {
      if (isFunction(group)) return group(...args)
      let [ pattern, func ] = group
      if (!isArray(pattern)) pattern = [pattern]
      if (shallowShape(pattern, args)) return func(...args)
    }
    throw new Error("etre: Non-Exhaustive Pattern")
  }
}
