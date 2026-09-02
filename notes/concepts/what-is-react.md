# What is React?

**In one line:** React is a JavaScript library for building user interfaces out of reusable, self-contained pieces called **components**.

## Why it matters
Instead of manually updating the page every time data changes, you describe *what the UI should look like* for a given state, and React efficiently updates the real page for you. This makes complex, interactive UIs far easier to build and reason about.

## The core idea
- You build **components** — functions that return UI.
- Components hold **state** (data that can change) and receive **props** (data passed in from a parent).
- When state or props change, React **re-renders** and updates only the parts of the page that actually changed.

## The React ecosystem (common pieces you'll meet)
- `react` — the core library (components, state, hooks).
- `react-dom` — connects React to the browser DOM (the actual page).
- **Create React App / Vite** — tools that scaffold and run a React project (`npm start`, `npm run build`).
- **React Router** — client-side page navigation (added separately).
- **Next.js** — a full framework built on React (routing, server rendering, etc.).

## Key points
- React ≠ a full framework. It handles the UI; you add libraries for routing, data fetching, etc.
- Everything is a component. Small components combine into bigger ones.
- You write **declarative** UI: "here's what it should look like," not step-by-step DOM instructions.

## Learn more
- [React — Quick Start](https://react.dev/learn)
- [Thinking in React](https://react.dev/learn/thinking-in-react)
