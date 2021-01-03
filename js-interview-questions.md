# JS question examples from Tan

## technical
### null vs undefined
intentional vs unintentional - expected vs unexpected
examples

### function hoisting
functions are first class citizens
even if definition is under where you use it - function definitions get hoisted to the top

### what does the concept of `this` mean to you?
what to touch on?
- Go into some concrete examples: obvious use cases
- what are the gotchas - where it affects you the most?
- named function/anonymous functions exist in both es5/es6
#### arrow function exclusive to es6 - value of `this` changes -- vs -- ordinary function - value of `this` not preserved to lexical scope (def: context of scope your in; body of the function you defined something in-- global, function)
  - this within ordinary function is undefined
  - this within global scope is global this
  - this within class is itself
  - method can be ordinary function or arrow function - changes `this`
- value of `this` changes depending where you're at

### currying
- partial application
### generator functions
- moreso in BE; not much in heavy UX/UI dev

## behavioral/technical
- have opinions on tools vs "i was taught this"
- what are pros vs cons for a technology?
- compare to vanilla js - event listeners, messy html injections
- conditional rendering
- components - reusable
- conventions in place
- robust -- abstractions on top of react (e.g. next.js)
- what are cons? reactive technology

### 