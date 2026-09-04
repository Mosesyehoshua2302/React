// Rank so we sort by real severity, not alphabetically
const priorityRank = { low: 1, medium: 2, high: 3 };

export const sortTickets = (tickets, preference) => {
  switch (preference) {
    // Copy first ([...]) because Array.sort mutates in place — don't reorder state directly
    case "High to Low":
      return [...tickets].sort(
        (a, b) => priorityRank[b.priority] - priorityRank[a.priority],
      );
    case "Low to High":
      return [...tickets].sort(
        (a, b) => priorityRank[a.priority] - priorityRank[b.priority],
      );

    default:
      return tickets;
  }
};
