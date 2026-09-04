import React, { useState } from "react";

export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;
  // Maps a ticket's priority to the CSS class that colors its dot
  const priorityClass = {
    low: "priority-low",
    medium: "priority-medium",
    high: "priority-high",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[priority]}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className="button"
        onClick={() => dispatch({ type: "DELETE_TICKET", payload: { id } })}
      >
        Delete
      </button>
      <button
        className="button"
        onClick={() =>
          dispatch({ type: "SET_EDITING_TICKET", payload: ticket })
        }
      >
        Edit
      </button>
    </div>
  );
}
