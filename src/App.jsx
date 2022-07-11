import { Home, Login, Logout, Posts, Profile, Navbar, NewPost } from "components";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Navbar" element={Navbar} />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  )
}