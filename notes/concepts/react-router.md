# React Router (client-side routing)

**In one line:** React Router lets a single-page app show different components for different URLs — without a full page reload.

## Why it matters
React itself has no concept of pages or URLs. React Router adds that: it watches the address bar and swaps which component renders, so `/` shows one view and `/watchlist` shows another, all client-side (instant, no server round-trip). Install separately: `react-router-dom`.

## The four core pieces
```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>                              {/* 1. wraps everything that routes */}
      <nav>
        <Link to="/">Home</Link>          {/* 3. navigation without reload */}
        <Link to="/watchlist">Watchlist</Link>
      </nav>

      <Routes>                            {/* 2. picks ONE matching route */}
        <Route path="/" element={<MoviesGrid />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Router>
  );
}
```
1. **`<Router>`** (`BrowserRouter`) — wraps your app; enables routing. Usually near the top, once.
2. **`<Routes>`** — looks at the current URL and renders the **first** `<Route>` that matches.
3. **`<Route path=... element={...} />`** — maps a URL path to the component to show. Self-closing (`/>`).
4. **`<Link to=...>`** — like an `<a>`, but navigates *without* reloading the page. Use it instead of `<a href>` for internal links.

## Passing props to a routed component
The component goes inside `element={...}` as JSX, so pass props right there:
```jsx
<Route
  path="/"
  element={<MoviesGrid movies={movies} toggleWatchlist={toggleWatchlist} />}
/>
```

## Key points
- `react-router-dom` is a **separate package** (`npm install react-router-dom`); this note reflects **v6** syntax.
- v6 uses `element={<Comp />}` (JSX). Older tutorials show `component={Comp}` or children — that's v5, don't mix them.
- `<Routes>` renders only the first match; put it where the page content should appear.
- Use `<Link>`/`<NavLink>` for internal navigation; a plain `<a>` triggers a full reload.
- Dynamic segments (`path="/movie/:id"`) + the `useParams()` hook let one route serve many items — a next step when you need detail pages.

## Learn more
- [React Router — official docs](https://reactrouter.com/)
- [React Router tutorial](https://reactrouter.com/en/main/start/tutorial)
