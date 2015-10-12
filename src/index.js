var facts = require("facts")

module.exports =  {
  shape:     facts.shape,
  whatType:  facts.whatType,
  BOOLEAN:   facts.BOOLEAN,
  ARRAY:     facts.ARRAY,
  FUNCTION:  facts.FUNCTION,
  NULL:      facts.NULL,
  NUMBER:    facts.NUMBER,
  OBJECT:    facts.OBJECT,
  REGEXP:    facts.REGEXP,
  STRING:    facts.STRING,
  UNDEFINED: facts.UNDEFINED,
  UNKNOWN:   facts.UNKNOWN,
  ANY:       facts.ANY,

  isBoolean:   facts.isBoolean,
  isArray:     facts.isArray,
  isFunction:  facts.isFunction,
  isNull:      facts.isNull,
  isNumber:    facts.isNumber,
  isObject:    facts.isObject,
  isRegExp:    facts.isRegExp,
  isString:    facts.isString,
  isUndefined: facts.isUndefined,

  etre (...patterns) {
    return function (...args) {
      for (let group of patterns) {
        if (facts.isFunction(group)) return group(...args)

        let [ pattern, func ] = group

        if (!facts.isArray(pattern)) pattern = [pattern]
        if (facts.shape(pattern, args)) return func(...args)
      }
      throw new Error("etre: Non-Exhaustive Pattern")
    }
  },
}
