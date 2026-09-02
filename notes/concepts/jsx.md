# JSX

**In one line:** JSX is a syntax that lets you write HTML-looking markup directly inside JavaScript, which React turns into UI.

## Why it matters
JSX lets you describe what a component renders in a readable, HTML-like way, while keeping the full power of JavaScript (variables, conditionals, loops) right alongside it.

## Example
```jsx
function Greeting() {
  const name = "Sam";
  return (
    <div className="greeting">
      <h1>Hello, {name}!</h1>
    </div>
  );
}
```
It looks like HTML, but it's JavaScript. `{name}` injects a value.

## Key rules
- Use `className`, not `class` (`class` is a reserved word in JS).
- A component must return **one** top-level element. Wrap siblings in a `<div>` or an empty Fragment `<>...</>`.
- Put JavaScript inside curly braces: `<h1>{title}</h1>`, `<img src={url} />`, `{count + 1}`, `{items.map(...)}`.
- Close every tag, including self-closing ones: `<img />`, `<br />`.
- Attributes use camelCase: `onClick`, `htmlFor`, `tabIndex`.

## Injecting dynamic values
Anything inside `{ }` is evaluated as JavaScript — variables, function calls, math:
```jsx
const year = new Date().getFullYear();
return <p>© {year} All rights reserved.</p>;
```

## Learn more
- [Writing markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [JavaScript in JSX with curly braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
