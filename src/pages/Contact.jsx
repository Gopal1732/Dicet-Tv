import React, { useState } from "react";
import Header from "../components/Header";
import Fotter from "../components/Fotter";

const Contact = () => {
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");
  const [email, setemail] = useState("")

  const submit=()=>{
    if(name=="" || message=="" || email==""){
      alert("fill all details please")
    }
    else{
      alert("submitted")
    }
  }
  return (
    <div>
      <Header />

      <section class="contact-us" id="contact-section">
        <form id="contact">
          <div class="section-heading">
            <h4>Contact us</h4>
          </div>

          <div class="inputField">
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Your name"
              autocomplete="on"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
              required
            />
            <span class="valid_info_name"></span>
          </div>

          <div class="inputField">
            <input
              type="Email"
              name="email"
              id="email"
              placeholder="Your email"
              required=""
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
            />
            <span class="valid_info_email"></span>
          </div>

          <div class="inputField">
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              value={message}
              onChange={(e)=>{setmessage(e.target.value)}}
            ></textarea>
            <span class="valid_info_message"></span>
          </div>

          <div class="inputField btn">
            <button
              type="submit"
              id="form-submit"
              class="main-gradient-button"
              
              onClick={submit}
            >
              Send a message
            </button>
          </div>
        </form>
      </section>
      <Fotter />
    </div>
  );
};

export default Contact;
