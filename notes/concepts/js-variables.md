# JS variables: let / const / var

**In one line:** Three ways to declare variables in JavaScript — use `const` by default, `let` when you must reassign, and avoid `var` in modern code.

## Why it matters
React is just JavaScript, so how variables are scoped affects your components directly. The block-scope and "fresh binding per loop iteration" behavior of `let`/`const` is exactly why event handlers and hooks capture the value you expect — `var` quietly breaks that.

## The differences

| | `var` | `let` | `const` |
|---|---|---|---|
| Scope | function | block `{}` | block `{}` |
| Hoisting | hoisted as `undefined` | hoisted, but unusable until declared (TDZ) | same as `let` |
| Redeclare in same scope | allowed | no | no |
| Reassign | yes | yes | no |
| Adds to global object | yes | no | no |

*TDZ = "temporal dead zone": the variable exists but touching it before its declaration line throws a `ReferenceError`.*

## Block scope
```js
if (true) {
  var a = 1;
  let b = 2;
}
console.log(a); // 1  — var leaks out of the block
console.log(b); // ReferenceError — b only lives inside the block
```

## The loop closure gotcha (matters in React)
```js
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)); // 3, 3, 3
for (let j = 0; j < 3; j++) setTimeout(() => console.log(j)); // 0, 1, 2
```
`let` creates a **new binding each iteration**, so each closure captures its own value. `var` shares one variable, so every callback sees the final value. This is the same class of bug behind "stale closures" in React (e.g. a value captured inside `useEffect` or an event handler).

## Key points
- Default to `const`; reach for `let` only when you reassign.
- `const` locks the **binding**, not the contents — you can still mutate a `const` object/array (`arr.push(...)` is fine; `arr = []` is not).
- Avoid `var`: function scope + hoisting-as-undefined causes subtle bugs.

## Learn more
- [MDN — let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN — const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
