import React, { useState } from "react";
import { createMsg } from "../api/msgfetch";


export default function MessageButton({token}) {
    const [message, setMessage] = useState("")


    return (
        <div className="message">
            <br />
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await createMsg(token, {message});
              setMessage("")
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