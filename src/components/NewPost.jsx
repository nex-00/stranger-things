import React, { useState } from "react";

export default function newpost({ token }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
}

return (
    <div>
        <form
        onSubmit={async (e) => {
            e.preventDefault();
        }}
        >
            
        </form>
    </div>
)