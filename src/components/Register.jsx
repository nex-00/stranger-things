import React, { useState } from "react";
import { registerUser } from "../api/auth";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const localStorageToken = localStorage.getItem("token");
  // if (localStorageToken = true) {
  //   "You're already signed in!"
  // } else {
  return (
    <div className="register">
      {/* <button onClick={() => isVisible(true)}>Register</button> */}
      <h4>Register:</h4>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await registerUser(username, password);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setPassword("");
          setUsername("");
        }}
      >
        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
          <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
      }
// }
