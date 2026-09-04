import React, { useState, useEffect } from "react";

export default function TicketForm({ dispatch, editingTicket }) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [priority, setPriority] = useState("low");

  // When the parent hands us a ticket to edit, prefill the fields with its
  // values; when editing is cleared, reset the form back to blank.
  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const priorityLabels = {
    1: "low",
    2: "medium",
    3: "high",
  };

  const clearForm = () => {
    setTitle("");

    setDescription("");

    setPriority("low");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the browser from reloading the page on submit

    const ticketData = {
      // Keep the existing id when editing; only mint a new one for a brand-new ticket
      id: editingTicket ? editingTicket.id : new Date().toISOString(), // timestamp doubles as a unique id
      title,
      description,
      priority,
    };
    // One form, two modes: update the existing ticket or add a new one
    dispatch({
      type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData,
    });
    if (editingTicket) dispatch({ type: "CLEAR_EDITING_TICKET" });
    clearForm();
  };

  const handleCancel = () => {
    dispatch({ type: "CLEAR_EDITING_TICKET" });
    clearForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            className="form-input"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            value={description}
            className="form-input"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <fieldset className="priority-fieldset">
          <legend>Priority</legend>
          {/* one radio per priority; shared name makes them mutually exclusive */}
          {Object.entries(priorityLabels).map(([value, label]) => (
            <label key={value} className="priority-label">
              <input
                type="radio"
                name="priority"
                value={label}
                checked={priority === label} // this radio is selected when it matches state
                className="priority-input"
                onChange={(e) => setPriority(e.target.value)}
              ></input>
              {label}
            </label>
          ))}
        </fieldset>
        <button type="submit" className="button">
          Submit
        </button>
        {editingTicket && (
          <button type="button" onClick={handleCancel} className="button">
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
}
