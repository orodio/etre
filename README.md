# Etre

A simple pattern matching library

> *Warning* This probably isnt very effient

## Install

```
$ npm install --save etre
```

## How it works

```
import etre, {
  STRING,
  NUMBER,
} from "etre"

const greeter = etre(
//  [pattern, function]
    ["gary", () => "LOL, gary why are you on the table"],
    ["pat", () => "Post man pat and his black and white cat"],
    [STRING, name => `Hello ${ name }, how are you?`],
    [NUMBER, n => "hmm... is your name really ${ n }? That seems like a number"]
)

greeter("gary")  // LOL, .....
greeter("pat")   // Post man pat and....
greeter("steve") // Hello steve, how are you?
greeter(5)       // hmm... is your name....
```

patterns can be pretty complicated

```
import etre, {
  STRING,
  NUMBER
} from "etre"

const handleAction = etre(
  [["deposit", NUMBER],  (_key, amount) => deposit(amount)],
  [["withdraw", NUMBER], (_key, amount) => withdraw(amount)],
  [["freeze account", NUMBER], (_key, accountNumber) => freeze(accountNumber)]
)
```

## License

**etre** is Copyright (c) 2015 James Hunter [@cccc00](https://twitter.com/cccc00) and licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
