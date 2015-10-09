import { each } from "lodash"
import { equal } from "assert"

import etre, {
  whatType,
  shallowShape,
  STRING,
  NUMBER,
  ARRAY,
  OBJECT,
  BOOLEAN,
  UNDEFINED,
  FUNCTION,
  NULL,
  REGEXP,
} from "../src/index"

describe ("General Stuff", () => {
  describe("#whatType", () => {
    each([
      ["str: hello", "hello", STRING],
      ["str: world", "world", STRING],
      ["str: hello world", "hello world", STRING],
      ["num: 5", 5, NUMBER],
      ["num: 5.0", 5.0, NUMBER],
      ["num: 0.5", 0.5, NUMBER],
      ["num: -5", -5, NUMBER],
      ["num: -5.0", -5.0, NUMBER],
      ["num: -0.5", -0.5, NUMBER],
      ["fn: function() {}", function () {}, FUNCTION],
      ["fn: () => {}", function () {}, FUNCTION],
      ["fn: whatType", whatType, FUNCTION],
      ["arr: []", [], ARRAY],
      ["arr: [{}]", [{}], ARRAY],
      ["arr: [1,2,3]", [1,2,3], ARRAY],
      ["arr: [true]", [true], ARRAY],
      ["obj: {}", {}, OBJECT],
      ["obj: {foo: 'bar'}", {foo: "bar"}, OBJECT],
      ["obj: {foo: []}", {foo: []}, OBJECT],
      ["bool: true", true, BOOLEAN],
      ["bool: false", false, BOOLEAN],
      ["und: undefined", undefined, UNDEFINED],
      ["null: null", null, NULL],
      ["regexp: /[a-z]/", /[a-z]/, REGEXP],
    ], ([desc, what, type]) => it(desc, () => equal(whatType(what), type)))
  })

  describe("#shallowShape", () => {
    each([
      [STRING, "world", true],
      ["world", STRING, true],
      [STRING, 1, false],
      [1, STRING, false],
      [1, 1, true],
      ["bob", "bob", true],
      [1, "bob", false],
      ["bob", 1, false],
      ["bob", "steve", false],
      [1, 5, false],
      [[1,2], [1,NUMBER], true],
    ], ([a, b, e], i) => it(i + 1, () => equal(shallowShape(a,b), e)))
  })

  describe("#etre - simple", () => {
    const fn1 = etre(
      ["bob", x => "OMG BOB"],
      [["bob"], x => "OMG BOB"],
      [STRING, x => x + x],
      [NUMBER, x => x * x],
      [false, x => false],
      [BOOLEAN, x => !x],
      [[NUMBER, STRING, true], (num, text, _bool) => `${ text } - ${ num * 2 }`],
      [[NUMBER, STRING, false], (num, text, _bool) => `${ text } - ${ num }`],
      x => "STEVE BUSCEMI"
    )

    it ("bob",   () => equal(fn1("bob"), "OMG BOB"))
    it ("hello", () => equal(fn1("hello"), "hellohello"))
    it (5,       () => equal(fn1(5), 25))
    it ("true",  () => equal(fn1(true), false) )
    it ("false", () => equal(fn1(false), false) )
    it ("fn1(3, 'word', true)", () => equal(fn1(3, "word", true), "word - 6"))
    it ("fn1(3, 'word', true)", () => equal(fn1(2, "word", true), "word - 4"))
    it ("fn1(3, 'word', false)", () => equal(fn1(3, "word", false), "word - 3"))
  })
})
