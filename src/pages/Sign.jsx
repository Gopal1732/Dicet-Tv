import React, { useState } from "react";
import Header from "../components/Header";
import Fotter from "../components/Fotter";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [user, setuser] = useState("");
  const [Toggle, setToggle] = useState(false)

  const navigate=useNavigate();

  const submit=()=>{
    if(name=="" || pass=="" || user==""){
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
        <p>Please Register</p>
        <input type="text" placeholder="Name" value={name}
              onChange={(e)=>{setname(e.target.value)}}/>
        <input type="text" placeholder="User Name" value={user}
              onChange={(e)=>{setuser(e.target.value)}}/>
        <input type="password" placeholder="Password" value={pass}
              onChange={(e)=>{setpass(e.target.value)}}/>
        <input type="submit" value="Sign In"  onClick={(e)=>{e.preventDefault();setToggle(!Toggle)}}/>
        <div class="links">
          <a href="#">Forgot password</a>
          <a href="login">Login</a>
        </div>

        <div>

        </div>
        {
          Toggle && <div>
            <p>  User: {user}</p>
            <p>  Password: {pass}</p>
    
          </div>
        }
      </form>
     

 
      <Fotter />
    </div>
  );
};

export default Sign;
