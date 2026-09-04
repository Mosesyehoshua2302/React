import React from "react";
import TicketItem from "./TicketItem";

// Renders each ticket as a TicketItem; passes dispatch down for edit/delete actions
export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} dispatch={dispatch} />
      ))}
    </div>
  );
}
