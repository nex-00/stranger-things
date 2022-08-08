import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({token}) {
  console.log("token", token);

  return (
    <nav className="navbar">
      {
      token ? null : <Link to="/Login">Login</Link>
      }
      <Link to="/Posts">Posts</Link>
      {
        token ?  <Link to="/NewPost">New Post</Link> : null
      }
      {
        token ? <Link to="/Logout">Logout</Link> : null
      }
      {
        token ? null : <Link to="/Register">Register</Link> 
      }
    </nav>
  );
}

