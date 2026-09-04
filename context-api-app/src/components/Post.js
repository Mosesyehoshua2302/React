import React from "react";
import Comment from "./Comment";

// Post just forwards username/isAdmin down as props — it doesn't use the context
// itself, so this is the "prop-drilling" that context is meant to avoid.
export default function Post({ username, isAdmin }) {
  return (
    <div>
      {/* Show admin-only controls only to admins */}
      {isAdmin && <button>Delete</button>}
      <h2>Example Post Title</h2>
      <p>This is example post content</p>

      <Comment username={username} isAdmin={isAdmin} />
    </div>
  );
}
