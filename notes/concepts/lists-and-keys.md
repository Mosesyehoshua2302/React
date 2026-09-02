# Rendering lists with .map() & keys

**In one line:** To render an array as UI, transform it into JSX with `.map()` and give each item a stable `key`.

## Why it matters
Most UIs are lists — movie cards, comments, search results. React doesn't have a template loop; you use plain JavaScript `.map()` to turn each data item into an element. The `key` lets React track which item is which across re-renders so it updates efficiently and correctly.

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
`.map()` returns an array of JSX elements; React renders each one.

## Keys — the rule people trip on
- Give the **outermost** element returned by `.map()` a `key`.
- Use a **stable, unique id** from your data (`movie.id`), not something that changes.
- **Avoid the array index** as a key when the list can reorder, filter, or have items inserted/removed — it causes wrong updates and lost input state. Index is only OK for a static, never-reordered list.
- Keys must be unique **among siblings**, not globally.

## Combine with .filter() for search
```jsx
{movies
  .filter((m) => m.title.toLowerCase().includes(query.toLowerCase()))
  .map((m) => <MovieCard key={m.id} {...m} />)}
```

## Key points
- `.map()` = data → JSX; one element per item.
- Every list item needs a `key`; make it a stable id.
- No `key` → React warns in the console; wrong `key` (index) → subtle UI bugs.

## Learn more
- [Rendering Lists](https://react.dev/learn/rendering-lists)
- [Keeping list items in order with key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
