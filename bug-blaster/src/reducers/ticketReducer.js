// Reducer for the ticket list. State shape: { tickets: [...] }.
// Each case returns a new state object (never mutates the existing one).
export default function ticketReducer(state, action) {
  switch (action.type) {
    // payload is the new ticket to append
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };

    // payload is a full ticket; replace the one with a matching id.
    // Also clears editing mode since the edit was just saved.
    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((t) =>
          t.id === action.payload.id ? action.payload : t,
        ),
        editingTicket: null,
      };

    // payload is { id } to remove. If we're deleting the ticket currently being
    // edited, also exit edit mode so the form doesn't point at a gone ticket.
    case "DELETE_TICKET":
      if (state.editingTicket && state.editingTicket.id === action.payload.id) {
        return {
          ...state,
          tickets: state.tickets.filter((t) => t.id !== action.payload.id),
          editingTicket: null,
        };
      } else {
        return {
          ...state,
          tickets: state.tickets.filter((t) => t.id !== action.payload.id),
        };
      }

    // payload is the ticket to load into the form for editing
    case "SET_EDITING_TICKET":
      return { ...state, editingTicket: action.payload };
    // Leave edit mode without saving (e.g. Cancel)
    case "CLEAR_EDITING_TICKET":
      return { ...state, editingTicket: null };
    // payload is the chosen sort order string ("High to Low" / "Low to High")
    case "SET_SORTING":
      return { ...state, sortPreference: action.payload };

    default:
      return state;
  }
}
