import React, { useState } from "react";
import Header from "../components/Header";
import Fotter from "../components/Fotter";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sign = () => {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [add, setadd] = useState("");
  const [gender, setgender] = useState("");
  const [Toggle, setToggle] = useState(false)

  const navigate = useNavigate();

  const Signin = async(e) => {
    e.preventDefault();
    if (name == "" || pass == "" || user == "") {
      alert("Fill all details please")
    }
    else {
      const response=await axios.post("http://localhost:8000/users/add",{
        username:user,email:email,password:pass,address:add,gender:gender,name:name
      })
      console.log(response);
      // alert("Submitted")
      // navigate("/")
    }
  }
  return (
    <div>
      <Header />
      <form class="login">
        <h2>Welcome, User!</h2>
        <p>Please Register</p>
        <input type="text" placeholder="Name" value={name}
          onChange={(e) => { setname(e.target.value) }} />
        <input type="text" placeholder="User Name" value={user}
          onChange={(e) => { setuser(e.target.value) }} />
        <input type="email" placeholder="Email"  onChange={(e) => { setemail(e.target.value) }} style={{ boxSizing: 'border-box', border: '1px solid lightgrey' }}  />
        <input type="text" placeholder="Gender"  onChange={(e) => { setgender(e.target.value) }} />       
        <input type="text" placeholder="Address"  onChange={(e) => { setadd(e.target.value) }}/>
        <input type="password" placeholder="Password" value={pass}
          onChange={(e) => { setpass(e.target.value) }} />

  <button onClick={(e) => {Signin(e)}}>Sign In </button>
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
