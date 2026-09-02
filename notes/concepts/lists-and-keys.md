# Rendering lists with .map() & keys

**In one line:** To render a list, turn an array of data into an array of JSX elements with `.map()`, giving each one a stable `key`.

## Why it matters
UIs are full of lists — movies, comments, search results. Instead of writing each item by hand, you map over your data so the UI stays in sync with the array automatically.

## Example
```jsx
function MoviesGrid({ movies }) {
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
        </div>
      ))}
    </div>
  );
}
```
`{movies.map(...)}` produces one `<div>` per movie. The `{ }` drops the resulting array right into JSX.

## Keys — why they matter
`key` is a special prop that gives each item a **stable identity** so React can tell which items were added, removed, or reordered — and update the DOM efficiently.
- Use a **unique, stable ID** from your data: `key={movie.id}`.
- **Avoid the array index** as key when the list can reorder, filter, or have items inserted/removed — it causes subtle bugs (wrong item state after a change).
- Keys must be unique **among siblings**, not globally.
- The `key` goes on the **outermost element** returned by `.map()`.

## Common companions
- `.filter()` before `.map()` to show a subset (e.g. a search result):
  ```jsx
  {movies
    .filter((m) => m.title.toLowerCase().includes(query.toLowerCase()))
    .map((m) => <MovieCard key={m.id} {...m} />)}
  ```
- Empty state: `{movies.length === 0 ? <p>No results</p> : movies.map(...)}`.

## Key points
- `.map()` returns a new array; React renders arrays of elements directly.
- Every mapped element needs a `key`; prefer a real ID over the index.
- Combine with `.filter()`/`.sort()` for search and ordering.

## Learn more
- [Rendering Lists](https://react.dev/learn/rendering-lists)
- [MDN — Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
