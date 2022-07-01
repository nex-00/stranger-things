import React from "react";

export default function NavBar({ currentUser }) {
    console.log("super cool navbar")

return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/posts">Posts</Link>
      {currentUser?.name ? <h4>Hello, {currentUser.name}</h4> : null}
    </nav>
  );
}