import each from "lodash/collection/each"
import { equal } from "assert"

import { etre, STRING, NUMBER, OBJECT } from "../src"

describe ("etre", () => {
  describe ("function 1 - single values", () => {
    var func = etre(
      [ "bob",  x => "pat" ],
      [ "pat",  x => "bob" ],
      [ STRING, x => `the string is ${ x }`],
      [ 1,      x => 1],
      [ 2,      x => 2 * 2],
      [ NUMBER, x => `the number is ${ x }`],
    )

    each([

      ["bob", "bob", "pat"],
      ["pat", "pat", "bob"],
      ["foo", "foo", "the string is foo"],
      ["1", 1, 1],
      ["2", 2, 4],
      ["35", 35, "the number is 35"],

    ], ([desc, arg, expect]) => {
      it (desc, () => { equal(func(arg), expect) })
    })
  })

  describe ("function 2 - multiple  values", () => {
    var func = etre(
      [ ["reply", OBJECT, STRING], (_status, _value, state) => state ],
      [ ["noreply", STRING],       (_status, state) => state + state ],
    )

    each([

      [1, ["reply", {foo: "bar"}, "bar"], "bar"],
      [2, ["noreply", "foo"], "foofoo"]

    ], ([desc, args, expect]) => {
      it (desc, () => { equal(func(...args), expect) })
    })
  })
})
