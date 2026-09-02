# useEffect & side effects (incl. data fetching)

**In one line:** `useEffect` runs code *after* a render to handle "side effects" — things outside rendering, like fetching data, timers, or subscriptions.

## Why it matters
Rendering should be pure: given props/state, return JSX. But real apps also need to *reach outside* — load data from a server, set a timer, read `localStorage`. `useEffect` is where that work belongs, so it doesn't run during render and mess up React's model.

## Example: fetch data once on mount
```jsx
import { useState, useEffect } from "react";

function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []); // empty array → run once, after first render

  return <p>{movies.length} movies loaded</p>;
}
```

## The dependency array (the second argument)
It controls **when** the effect re-runs:
```jsx
useEffect(() => { /* ... */ });          // after EVERY render
useEffect(() => { /* ... */ }, []);      // once, after first render (mount)
useEffect(() => { /* ... */ }, [query]); // after mount + whenever `query` changes
```

## Cleanup (return a function)
If an effect sets up something ongoing (timer, subscription, listener), return a function to tear it down. React runs it before the next effect and on unmount:
```jsx
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id); // cleanup
}, []);
```

## Key points
- Put every value from props/state that the effect uses into the dependency array (avoids "stale" data — see [JS variables](js-variables.md) closures).
- `[]` = run once on mount; omitting the array = run every render (rarely what you want).
- Set state inside an effect to store fetched data — that triggers a re-render with the results.
- Effects run **after** the DOM updates, not during render.

## Learn more
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [Fetching data](https://react.dev/learn/you-might-not-need-an-effect#fetching-data)
