import React, { useState } from "react";
import Header from "../components/Header";
import Fotter from "../components/Fotter";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [Toggle, setToggle] = useState(false)

  const navigate=useNavigate();


  const submit=()=>{
    if(name=="" || pass==""){
      alert("Fill all details please")
    }
    else{
      alert("Submitted")
      navigate("/")

    }
  }
  return (
    <div>
      <Header />

      <form class="login">
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <input type="text" placeholder="User Name"    value={name}
              onChange={(e)=>{setname(e.target.value)}}/>
        <input type="password" placeholder="Password"    value={pass}
              onChange={(e)=>{setpass(e.target.value)}}/>
        <input type="submit" value="Log In" onClick={(e)=>{e.preventDefault();setToggle(!Toggle)}}/>
        <div class="links">
          <a href="#">Forgot password</a>
          <a href="/sign-in">Register</a>
        </div>
        {
          Toggle && <div>
            <p>  User: {name}</p>
            <p>  Password: {pass}</p>
    
          </div>
        }
      </form>
      <Fotter />
    </div>
  );
};

export default Login;
