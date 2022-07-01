import { Home, Login, Logout, Posts, Profile, Navbar, NewPost } from "components";
import { useEffect, useState} from "react"
import { Route, Routes } from "react-router-dom"


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<home />} />
        <Route path="/Profile" element={<profile />} />
      </Routes>
    </div>
  )
}