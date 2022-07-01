import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  console.log("i literally copied and pasted this from the other proj");

  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
}
