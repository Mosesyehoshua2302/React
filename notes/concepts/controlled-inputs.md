# Controlled inputs, events & filtering

**In one line:** A "controlled input" is a form field whose value is driven by state — you type, an event updates state, and the input shows that state right back.

## Why it matters
This is the core pattern behind search boxes, dropdowns, and any live filtering. State is the single source of truth; the input is just a view of it. Once you get this loop, search/filter/sort UIs all follow the same shape.

## The loop (three pieces)
```jsx
const [searchTerm, setSearchTerm] = useState("");        // 1. state

const handleSearchChange = (event) => {                  // 2. event handler
  setSearchTerm(event.target.value);
};

<input value={searchTerm} onChange={handleSearchChange} /> // 3. bound input
```
1. **State** holds the current value.
2. **Handler** reads `event.target.value` (what's in the field) and saves it — which re-renders.
3. **`value={state}`** makes the field display that state. `onChange` fires on every keystroke.

Because `value` comes from state, the field can't drift out of sync — React redraws it from the truth every render.

## Same pattern for a dropdown
```jsx
const [genre, setGenre] = useState("All Genres");

<select value={genre} onChange={(e) => setGenre(e.target.value)}>
  <option>All Genres</option>
  <option>Action</option>
</select>
```

## Filtering: derive the list from state (don't store it)
Don't keep a separate `filteredMovies` in state — **compute it during render** from the source list + the current inputs:
```jsx
const matchesGenre = (m) =>
  genre === "All Genres" || m.genre.toLowerCase() === genre.toLowerCase();
const matchesSearch = (m) =>
  m.title.toLowerCase().includes(searchTerm.toLowerCase());

const filteredMovies = movies.filter((m) => matchesGenre(m) && matchesSearch(m));

{filteredMovies.map((m) => <MovieCard key={m.id} movie={m} />)}
```
`.filter()` returns a **new** array (never mutates `movies`), and it re-runs every render, so it always reflects the latest inputs. Combine tests with `&&` to require all, `||` inside a test to allow alternatives.

## Key points
- Controlled input = `value={state}` + `onChange` that calls the setter.
- Event handlers receive an `event`; `event.target.value` is the field's current value.
- **Derived data** (like a filtered list) should be *computed from state*, not stored in its own state — fewer bugs, nothing to keep in sync.
- Initialize state with the right type: `""` for text, not `[]` (see [JS variables](js-variables.md)).

## Learn more
- [Reacting to input with state](https://react.dev/learn/reacting-to-input-with-state)
- [Responding to events](https://react.dev/learn/responding-to-events)
- [You Might Not Need an Effect — derived state](https://react.dev/learn/you-might-not-need-an-effect)
