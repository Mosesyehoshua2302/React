# Forms & form submission

**In one line:** Build a form from controlled inputs, handle its `onSubmit` (calling `e.preventDefault()`), gather the state into an object, then optionally reset the fields.

## Why it matters
Filtering reads one input live; a *form* collects several fields and does something once, on submit (save a ticket, create a user). The submit step has its own rules — chiefly stopping the browser's default page reload.

## The whole pattern
```jsx
function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const clearForm = () => {          // reset = set each field back to initial
    setTitle("");
    setDescription("");
    setPriority("low");
  };

  const handleSubmit = (e) => {
    e.preventDefault();              // stop the browser reloading the page
    const ticket = { title, description, priority };
    console.log(ticket);            // later: send to a server / lift up
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## The three things people miss
1. **`onSubmit` goes on the `<form>`, not the button**, and you must call **`e.preventDefault()`** — otherwise the browser reloads the page and you lose everything.
2. **Every field is a controlled input** — `value={state}` + `onChange`. A `<textarea>` is controlled the same way (`value=...`, not children).
3. **Resetting = set state back to initial values.** There's no magic reset; you call the setters (or `e.target.reset()` on the form, but state-driven reset is cleaner).

## Radio buttons / grouped choices
Radios share a `name`; the selected one is decided by `checked`:
```jsx
{Object.entries(priorityLabels).map(([value, label]) => (
  <label key={value}>
    <input
      type="radio"
      name="priority"
      value={label}
      checked={priority === label}      // this input is "on" when it equals state
      onChange={(e) => setPriority(e.target.value)}
    />
    {label}
  </label>
))}
```
`checked={priority === label}` is what makes it controlled — the state decides which radio is filled, and `onChange` updates that state.

## Key points
- `<form onSubmit={fn}>` + `e.preventDefault()` — always, for React forms.
- Each field: controlled (`value`/`checked` + `onChange`). `<textarea>` uses `value`, not inner text.
- On submit, read the current state into an object; reset by calling setters.
- Use `type="submit"` on the button so Enter also submits.

## Learn more
- [MDN — <form>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [React — Reacting to input with state](https://react.dev/learn/reacting-to-input-with-state)
