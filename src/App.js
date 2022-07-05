import { Register } from "components/CreateAcc";
import { Login } from "components/Login";
import { useEffect, useState } from "react";
import { fetchMe } from "api/auth";


export default function App() {
const [token, setToken] = useState("")
const [currentUser, setCurrentUser] = useState({})

useEffect(() => {
  const localStorageToken = localStorage.getItem("token");

  async function getMe() {
    const result = await fetchMe(localStorageToken);
    console.log("result from fetch me", result)
    setCurrentUser(result.data);
  }
  if (localStorageToken) {
    getMe()
  }
}, [token])

console.log("The current user is: ", currentUser)

  return ( 
  <>
    <Register setToken={setToken} />
    <Login setToken={setToken} />
  </>
  );
}
