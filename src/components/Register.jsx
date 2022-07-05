import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"

export default function CreateAcc({ setToken, setCurrentUser }) {
    let navigate = useNavigate()

    const [name, setName] = useState("")

    return <div>
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                const result = await Register(name)
                console.log(result)
            }}>
                <input value={name} onChange={(e)=> setName(e.target.value)}/>
                <button type="submit">Submit</button>
        </form>
    </div>
}