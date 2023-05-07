import React,{useState} from 'react';
import logo from "../../assets/images/only_logo.png";
import "./register.css";

function Register() {
    const [username, setUsername] =useState ("");
    const [password, setPassword] = useState("");

   async function registrationForm (e){
        e.preventDefault();
    const  response = await fetch('http://localhost:4000/register', {
            method: "POST",
            body: JSON.stringify({username,password}),
            headers: {"Content-Type": "application/json"},
          });
          if (response.status === 200) {
            alert('registration sucessul');
          } else {
            alert('registration failed')
          }

    }


  return (
    <>
    <section id="register">
        <div className="register_wrapper">
            <div className="top">
                <img src={logo} alt="Slick Union Bank Logo" />
                <h2 className='head text_center'>SLICK UNION BANK</h2>
                <p className='text_center'>Account Registration</p>
            </div>
            <form onSubmit={registrationForm}>
                <input 
                 type="text" 
                 placeholder='Username' 
                 value={username}
                 onChange={ e => setUsername(e.target.value)} 
                 />

                <input 
                type="password" 
                placeholder='Password' 
                value={password} 
                onChange={ e => setPassword(e.target.value)} 
                />
                 <button className="register_btn btn">Login</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Register