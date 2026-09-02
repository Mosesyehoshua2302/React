# Components

**In one line:** A component is a JavaScript function that returns JSX — a reusable building block of your UI.

## Why it matters
Components let you break a page into independent, reusable pieces (a header, a card, a footer). Build each once, then reuse or combine them — keeping code organized and DRY.

## Anatomy
```jsx
export default function Header() {
  return (
    <header className="header">
      <h1>My App</h1>
    </header>
  );
}
```
- The function name is **Capitalized** (required — React treats lowercase names as HTML tags).
- `export default` makes it importable: `import Header from "./components/Header";`.
- Render it like a tag: `<Header />`.

## Composition — building a page from components
A parent component combines children to form the full UI. This is the heart of React:
```jsx
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}
```

## Props — passing data in
Props are read-only inputs a parent passes to a child:
```jsx
<MovieCard title="Inception" rating={8.8} />

function MovieCard({ title, rating }) {   // destructured props
  return <h3>{title} — {rating}</h3>;
}
```

## Dynamic content
A component can compute values at render time and drop them into JSX with `{ }`:
```jsx
export default function Footer() {
  const year = new Date().getFullYear();
  return <footer>© {year}</footer>;
}
```

## Key points
- Component names **must** start with a capital letter.
- Return exactly one top-level JSX element.
- Props flow **down** (parent → child) and are read-only.
- Keep components small and focused on one job.

## Learn more
- [Your first component](https://react.dev/learn/your-first-component)
- [Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
