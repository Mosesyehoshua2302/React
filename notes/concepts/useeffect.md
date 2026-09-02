# useEffect & side effects

**In one line:** `useEffect` runs code that reaches *outside* React — fetching data, timers, subscriptions — after the component renders.

## Why it matters
Rendering should be pure: given props/state, return JSX and nothing else. Anything else — calling an API, setting a timer, reading `localStorage`, adding a DOM event listener — is a **side effect**, and belongs in `useEffect`. It runs *after* render, so it never blocks the UI from painting.

## Example: fetch data once when the component mounts
```jsx
import { useState, useEffect } from "react";

function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []); // empty array = run once, after first render

  return <p>{movies.length} movies loaded</p>;
}
```

## The dependency array (2nd argument) — the important part
```jsx
useEffect(() => { /* ... */ });          // runs after EVERY render
useEffect(() => { /* ... */ }, []);      // runs ONCE (on mount)
useEffect(() => { /* ... */ }, [query]); // runs on mount + whenever `query` changes
```
React re-runs the effect only when a value in the array changes. Include every prop/state value the effect uses, or you'll read stale values.

## Cleanup
Return a function to undo the effect (cancel timers, remove listeners). React runs it before the next effect and when the component unmounts:
```jsx
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id); // cleanup
}, []);
```

## Key points
- Effects run **after** the browser paints, not during render.
- `[]` = once on mount; `[deps]` = re-run when deps change; omitted = every render.
- Don't `setState` unconditionally with no dep array — it causes an infinite render loop.
- In React 18 **StrictMode** (dev only), effects run twice on mount to surface missing cleanup — expected, not a bug.

## Learn more
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [useEffect — API reference](https://react.dev/reference/react/useEffect)
