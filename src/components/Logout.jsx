import React from "react";

export default function Logout({setToken, setCurrentUser}) {
    return (
      <div>
      <form
          onSubmit={async (e) => {
            e.preventDefault();
      localStorage.removeItem("token")
      setToken("")
      setCurrentUser({})
    }}>
      <button type="submit">Logout</button>
    </form>
      </div>
    );
} 
