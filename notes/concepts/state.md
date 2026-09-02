# State & useState

**In one line:** State is data a component *remembers* between renders, and `useState` is the hook that gives a component its own piece of state.

## Why it matters
Props come from the parent and are read-only. **State** is data the component owns and can change over time — a search box's text, a toggle, a counter, fetched data. When state changes, React automatically **re-renders** the component so the UI reflects the new value. This is what makes a page interactive.

## Example
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 0 is the initial value

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```
- `useState(0)` returns a pair: the current value (`count`) and a setter (`setCount`).
- Calling `setCount(...)` updates the value **and** tells React to re-render.

## A common real pattern: a controlled search box
```jsx
const [query, setQuery] = useState("");

<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Search movies..."
/>
```
The input's value is driven by state, so `query` always mirrors what's on screen — ready to filter a list with `.map()`/`.filter()`.

## Key rules
- **Never mutate state directly.** `count++` or `arr.push(x)` won't re-render. Always call the setter with a new value/array/object:
  ```jsx
  setItems([...items, newItem]);      // new array, not items.push()
  setUser({ ...user, name: "Sam" });  // new object
  ```
- **Updates are asynchronous / batched.** If the next value depends on the previous, use the function form:
  ```jsx
  setCount(prev => prev + 1);
  ```
- Hooks must be called at the **top level** of a component — not inside loops, conditions, or nested functions.
- Each component instance has its **own** independent state.
- Initial value is used **only on first render**; later renders ignore the `useState` argument.

## State vs props
- **Props**: passed in from a parent, read-only.
- **State**: owned by the component, changeable via its setter.
- To share state, "lift it up" to the closest common parent and pass it down as props.

## Learn more
- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [useState — API reference](https://react.dev/reference/react/useState)
