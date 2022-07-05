import { Home, Login, Logout, Posts, Profile, Navbar, NewPost } from "components";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  )
}