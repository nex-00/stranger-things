import { Home, Login, Logout, Posts, Profile, Navbar } from "components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
