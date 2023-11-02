import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [state,setState] = useState(false);
  return (
    <header className="header-comp">
      <div class="col-lg-2 logo">
        <div class="first">Dicet</div>
        <div class="second">Tv</div>
      </div>
      <nav class="col-lg-6">
      <ul class={
              `nav_link ${state ? "active":""}`
            }>
          <li>
            <a href="/">home </a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/product">products</a>
          </li>
          <li>
            <a href="/blog">blog</a>
          </li>
          <li>
            <a href="/contact">contact us</a>
          </li>
          <button id="btn1">
            <Link to="/login" className="linker">
                  Get Started
                </Link>
  
          </button>
        </ul>
      </nav>
      <div class="col-lg-2 icon">
      <i class="fa fa-bars responsive" onClick={()=>{
              setState(!state);
            }}></i>
        <i class="fa fa-user-o"></i>
        <i class="fa fa-shopping-bag"></i>
        <i class="fa fa-search"></i>
        {/* <i class="fa fa-bars responsive" onClick={()=>{
              setState(!state);
            }}></i> */}
      </div>
    </header>
  );
};

export default Header;
