# React Study Notes

Concise, beginner-friendly reference notes on React — **not tied to any single project**.
Refer to these from any codebase. Maintained by the `react-notes` skill.

## Concepts
- [What is React?](concepts/what-is-react.md) — the big picture, core idea, ecosystem
- [JSX](concepts/jsx.md) — HTML-like syntax inside JavaScript
- [Components](concepts/components.md) — building blocks, composition, props, dynamic content
- [State & useState](concepts/state.md) — data a component remembers; re-rendering on change
- [useEffect & side effects](concepts/useeffect.md) — running code outside render; the dependency array
- [Rendering lists with .map() & keys](concepts/lists-and-keys.md) — turning arrays into UI
- [Data fetching](concepts/data-fetching.md) — load data in useEffect, store in state, render
- [Controlled inputs, events & filtering](concepts/controlled-inputs.md) — value+onChange loop, deriving a filtered list
- [Conditional rendering & dynamic className](concepts/conditional-rendering.md) — if / ternary / && , class from data
- [JS variables: let / const / var](concepts/js-variables.md) — scope, hoisting, and why it matters in React

## Files
- [Typical project structure](files/project-structure.md) — what each file/folder does (CRA & Vite)

## Suggested learning order
1. JS variables (let/const/var) → 2. What is React? → 3. JSX → 4. Components → 5. State & useState → 6. useEffect → 7. Lists & keys → 8. Data fetching → 9. Controlled inputs & filtering → 10. Conditional rendering → 11. Project structure

## Topics not yet covered (candidates for future notes)
Context · React Router · Custom hooks · Lifting state up (sharing state between siblings)

---

## Changelog
- **2026-09-02** — Added **Controlled inputs, events & filtering** and **Conditional rendering & dynamic className** notes — prompted by `MoviesGrid.js` (search box + genre/rating dropdowns driving a `.filter()`) and `Rating.js` (class chosen from the rating value).
- **2026-09-01** — Added **useEffect & side effects**, **Rendering lists with .map() & keys**, and **Data fetching** notes — prompted by `MoviesGrid.js` fetching `movies.json` in a `useEffect([])` and rendering with `.map()` + `key`.
- **2026-09-01** — Added a **State & useState** note (owning changeable data, re-rendering, immutable updates, controlled inputs, state vs props) — prompted by `useState` appearing in the project.
- **2026-09-01** — Created a local `notes/` directory in this project (per user request) seeded from the central notes, and added a new **JS variables (let/const/var)** note covering block scope, hoisting, the TDZ, and the loop-closure gotcha (relevant to stale closures in React hooks).
