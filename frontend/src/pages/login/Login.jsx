import React from 'react';
import "./login.css";
import { Link, Navigate} from "react-router-dom";
import { useContext,useState } from 'react';
import { userContext } from "../../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(userContext);

  async function login(e) {
    e.preventDefault();
   const response = await fetch('https://slick-union-bank.onrender.com/login', {
      method: "POST",
      body: JSON.stringify({username,password}),
      headers: {"Content-Type": "application/json"},
      credentials: "include",
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      })
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/profile"} />
  }

  return (
    <div id='form'>
       <form onSubmit={login} className="home_form">
            <p>Account Login</p>
            <label>User ID</label>
            <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />

            <label>Password</label>
            <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/">Forgot Password?</Link>
            <button className="home_form_button btn">Login</button>
          </form> 
    </div>
  )
}

export default Login
