import { createContext } from "react";

// Shared user info any component can read without prop-drilling.
// The object here is the DEFAULT — used only when a component reads this
// context with no matching Provider above it in the tree.
const UserInfoContext = createContext({
  username: "Guest",
  isAdmin: false,
});

export default UserInfoContext;
