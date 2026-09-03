# Lifting state up (sharing state between components)

**In one line:** When two components need the same data, move that state **up** to their closest shared parent and pass it down as props.

## Why it matters
State lives in one component, but often several components need it — a list page and a watchlist page both need the "watchlist" data. Instead of duplicating it (which drifts out of sync), you keep **one** copy in the common parent and hand it down. The parent becomes the single source of truth.

## The pattern
Parent owns the state **and** the function that changes it, then passes both down:
```jsx
function App() {
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId) // remove
        : [...prev, movieId]                  // add
    );
  };

  return (
    <>
      <MoviesGrid  watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
      <Watchlist   watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
    </>
  );
}
```
Both children read the same `watchlist` and call the same `toggleWatchlist`. A change from either one updates the parent's state → both re-render in sync.

## Data down, events up
- **Data flows down** as props (`watchlist={watchlist}`).
- **Changes flow up** by calling a function the parent passed down (`toggleWatchlist(id)`).

The child doesn't own or mutate the data — it just *requests* a change by calling the callback. This one-way flow is what makes React predictable.

## Note the immutable update
`toggleWatchlist` never mutates the array — it builds a **new** one (`[...prev, id]` or `prev.filter(...)`). React only re-renders when you pass a new value to the setter (see [state](state.md)).

## Key points
- Find the **closest common parent** of the components that need the data; put the state there.
- Pass the value down as a prop; pass a setter/handler down so children can trigger changes.
- Don't copy shared state into each child — one source of truth avoids sync bugs.
- If props get passed through many layers ("prop drilling"), that's the signal to reach for **Context** later.

## Learn more
- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
