# Typical React Project Structure

Most React apps (Create React App or Vite) share a similar layout. Here's what the files that matter are for.

## The important ones

| File / folder | What it's for |
|---------------|---------------|
| `src/index.js` (or `main.jsx`) | The **entry point**. Grabs `<div id="root">` from the HTML and renders your `<App />` into it. Where React attaches to the page. |
| `src/App.js` | The **root component** — top of your component tree. Everything visible starts here. |
| `src/components/` | Folder for reusable UI components (Header, Footer, cards, etc.). |
| `public/index.html` | The single HTML page, containing `<div id="root"></div>` — the one spot React fills in. Rarely edited. |
| `package.json` | Dependencies and the `npm` scripts (`start`, `build`, `test`). |
| `public/` assets & `*.json` data | Static files (images, fonts) and any local data files you load into the UI. |

## The entry point, explained
```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
```
- `createRoot(...)` connects React to the real `<div id="root">`.
- `root.render(<App />)` draws your whole app inside it.
- `<React.StrictMode>` is a dev-only helper that flags potential problems; it renders nothing itself.

## Supporting files (mostly ignore while learning)
- `*.css` — styling. A global stylesheet plus per-component styles.
- `reportWebVitals.js` — optional performance measuring (CRA). Not needed to learn React.
- `setupTests.js`, `*.test.js` — testing setup and sample tests.

## CRA vs Vite (quick note)
- **Create React App**: entry is `src/index.js`, run with `npm start`.
- **Vite**: entry is `src/main.jsx`, run with `npm run dev`. Faster; the modern default.

## Learn more
- [Create React App — Folder Structure](https://create-react-app.dev/docs/folder-structure/)
- [createRoot — ReactDOM](https://react.dev/reference/react-dom/client/createRoot)
