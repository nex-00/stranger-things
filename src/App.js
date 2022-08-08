import Navbar from "components/Navbar";
import Register from "components/Register";
import Login from "components/Login";
import NewPost from "components/NewPost"
import Posts from "components/Posts"
import MyPosts from "components/MyPosts"
import { useEffect, useState } from "react";
import { fetchMe } from "api/auth";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Styles from "styles.css";
import Logout from "components/Logout"

export default function App() {
  
const [token, setToken] = useState("");
const [currentUser, setCurrentUser] = useState({});

useEffect(() => {
  const localStorageToken = localStorage.getItem("token");

  async function getMe() {
    const result = await fetchMe(localStorageToken);
    console.log("result from fetch me", result);
    setCurrentUser(result.data);
    setToken(localStorageToken)
  }
  if (localStorageToken) {
    getMe();
  }
}, [token])

console.log("The current user is: ", currentUser);
const isLoggedIn = currentUser.isLoggedIn
console.log(isLoggedIn)

const navigate = useNavigate();

if (currentUser.isLoggedIn == false) {
  navigate('/Login', {replace: true});
  navigate('/')
  }

  return ( 
  <>
      <Navbar token = {token}/>
      {currentUser?.username ? <h3 className="user">{currentUser.username}</h3> : null}
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route path="/Login" element={<Login setToken={setToken} />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/NewPost" element={<NewPost />} />
        <Route path="/Register" element={<Register setToken={setToken} />} />
        <Route path="/Logout" element={<Logout setCurrentUser={setCurrentUser} setToken={setToken} token={token} />} />
      </Routes>
  </>
  );
}

