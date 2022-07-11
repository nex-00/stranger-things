import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  console.log("");

  return (
    <nav className="navbar">
      <Link to="/Login">Login</Link>
      <Link to="/Posts">Posts</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Logout">Logout</Link>
      <Link to="/Register">Register</Link>
    </nav>
  );
}

