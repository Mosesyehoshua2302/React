import React from "react";
import Post from "./Post";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

export default function BlogPage() {
  // Read the context value directly — no props needed from a parent
  const userInfo = useContext(UserInfoContext);
  return (
    <div>
      <h1>The Blog Page</h1>

      <Post username={userInfo.username} isAdmin={userInfo.isAdmin} />
    </div>
  );
}
