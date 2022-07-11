import React from "react";

export default function Logout({setToken}) {
    return (
      <div>
      <form
          onSubmit={async (e) => {
            e.preventDefault();
      localStorage.clear()
      setToken("")
    }}>
      <button type="submit">Logout</button>
    </form>
      </div>
    );
} 
