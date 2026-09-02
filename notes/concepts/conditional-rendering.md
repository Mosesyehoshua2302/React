# Conditional rendering & dynamic className

**In one line:** Use plain JavaScript (`if`, `? :`, `&&`) to decide *what* a component renders — including choosing a CSS class based on data.

## Why it matters
UIs change based on data: show a badge only when logged in, color a rating by its value, render "No results" when a list is empty. React has no special template syntax for this — you just use normal JS, because JSX *is* JS.

## Choosing a class based on data (the pattern you used)
Only the class changes, so compute *that* and render one element:
```jsx
function ratingClass(rating) {
  if (rating < 3) return "rating-bad";
  if (rating <= 7) return "rating-ok";
  return "rating-good";
}

export default function Rating({ rating }) {
  return <p className={`movie-card-rating ${ratingClass(rating)}`}>{rating}</p>;
}
```
- Early `return`s avoid an `if/else` ladder.
- The **template literal** `` `movie-card-rating ${ratingClass(rating)}` `` glues a fixed base class to a computed one.

## The three everyday tools

**Ternary — pick between two things:**
```jsx
{isLoggedIn ? <Dashboard /> : <LoginButton />}
<p className={active ? "on" : "off"}>...</p>
```

**`&&` — render something or nothing:**
```jsx
{movies.length === 0 && <p>No results found.</p>}
{error && <span className="error">{error}</span>}
```
If the left side is false, React renders nothing. (Watch out: `{count && ...}` renders a literal `0` when count is 0 — use `count > 0 && ...`.)

**`if` before the return — for bigger branches:**
```jsx
if (loading) return <Spinner />;
if (error)   return <ErrorBox message={error} />;
return <List items={items} />;
```

## Key points
- JSX is JavaScript, so any expression works inside `{ }` — ternaries, `&&`, function calls.
- Prefer computing one variable/class over duplicating whole JSX blocks per branch.
- `&&` for "show or hide", ternary for "either/or", early `return`/`if` for distinct whole-UI states.
- Build a `className` from a fixed part + a computed part with a template literal.

## Learn more
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
