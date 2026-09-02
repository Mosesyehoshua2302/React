# Data fetching

**In one line:** Load data from a file or API inside `useEffect`, store the result in state, and render it once it arrives.

## Why it matters
Components often need data they don't have at first render (movies from a JSON file, results from an API). The pattern is always the same trio: **state** to hold the data, **`useEffect`** to fetch it, and the **setter** to store it — which re-renders the component with the loaded data.

## The core pattern
```jsx
import { useState, useEffect } from "react";

function MoviesGrid() {
  const [movies, setMovies] = useState([]); // 1. state starts empty

  useEffect(() => {                          // 2. fetch after mount
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));      // 3. store → triggers re-render
  }, []);

  return <p>{movies.length} movies</p>;
}
```
First render shows the empty initial state; when the fetch resolves, `setMovies` re-renders with real data.

## A sturdier version (loading + error)
```jsx
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch("movies.json")
    .then((res) => {
      if (!res.ok) throw new Error("Request failed");
      return res.json();
    })
    .then(setMovies)
    .catch(setError)
    .finally(() => setLoading(false));
}, []);

if (loading) return <p>Loading…</p>;
if (error) return <p>Something went wrong.</p>;
// otherwise render movies with .map()
```

## Key points
- Always render for the **empty/loading state first** — data isn't there on the initial render.
- Fetch in `useEffect` with `[]` so it runs once, not on every render.
- Handle **loading** and **error** states so the UI doesn't look broken or crash on `undefined`.
- For anything beyond basics, libraries like **React Query / SWR** handle caching, retries, and refetching for you.

## Learn more
- [You Might Not Need an Effect (when *not* to fetch in useEffect)](https://react.dev/learn/you-might-not-need-an-effect)
- [MDN — Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
