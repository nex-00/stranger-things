import React, { useState } from "react";


export default function MessageButton() {
    const [message, setMessage] = useState("")


    return (
        <div className="message">
            <br />
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setMessage("");
            }}
          >
            <input
              value={message}
              placeholder="message"
              onChange={(e) => setMessage(e.target.value)}
            />
        <button type="submit">Send Message</button>
        </form>
    </div>
    )
}

export { MessageButton }