import React, { useState } from "react";
import Fotter from "../components/Fotter";
import { Link } from "react-router-dom";

const Home = () => {
  const [state,setState] = useState(false);
  return (
    <div class="container">
      <div class="section1">
        <header className="">
          <div class="col-lg-2 logo">
            <div class="first">Dicet</div>
            <div class="second">Tv</div>
          </div>
          <nav class="col-lg-6">
            <ul class={
              `nav_link ${state ? "active":""}`
            }>
              <li>
                <a href="/home">home</a>
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

        <div class="row2">
          <div class="col-lg-1 col1">
            <i class="fa fa-arrow-circle-o-left"></i>
            <i class="fa fa-arrow-circle-o-right"></i>
          </div>
          <div class="col-lg-5 col2" id="home">
            <div class="head1">Your Favorite</div>
            <div class="head2">Shows And Movies</div>
            <p>
            Pay attention to the story, the characters, and the film's overall setting. Think about how these elements come together to create a cohesive whole.
            </p>

            <div class="btn2">
              <button id="btn2-1">Start Now</button>
              <button id="btn2-2">Read More</button>
            </div>
          </div>
          <div class="col-lg-4 col3">
            <h2>Dicet Tv</h2>
            <img src="./section1-col3.png" alt="" srcset="" />
          </div>
        </div>

        <div class="col-lg-10 box">
          <div class="box1">
            <img src="./icon-2.png" alt="" srcset="" />
            <h3>Broadband</h3>
            <p>
            Broadband is the wide-bandwidth data transmission that exploits signals at a wide spread of frequencies and is used in fast internet connections. 
            </p>
          </div>
          <div class="box2">
            <img src="./icon-1.png" alt="" srcset="" />
            <h3>Satelite TV</h3>
            <p>
            Satellite Tv is service that delivers television programming to viewers relaying from a communication satellite orbiting Earth directly to viewer's location.
            </p>
          </div>
          <div class="box3">
            <img src="./icon-3.png" alt="" srcset="" />
            <h3>Mobility</h3>
            <p>
            The experience of individual mobility was accessible to the general public through the velocipede. It gave a sense of freedom, and discover the surrounding area.
            </p>
          </div>
        </div>
      </div>
      <div class="section2" id="about">
        <div class="sec2-col1">
          <img src="./section2-img.png" alt="" srcset="" />
        </div>
        <div class="sec2-col2">
          <div class="sec2-content">
            <div class="head3">Live Sport and TV-shows for best</div>
            <div class="head3">friends</div>
            <p>
            Live streaming allows sports organizations to reach a wider audience, including those who may not have been able to attend the event in person. This not only increases the number of viewers but also helps to build a more engaged and dedicated fan base.
            </p>
            <div class="sec2-box">
              <div class="secbox1">4K Ultra HD Quality</div>
              <div class="secbox2">200+ Online Channels</div>
            </div>
            <div id="btn4">
              read more
              
              </div>
          </div>
        </div>
      </div>

      <div class="section3" id="product">
        <div class="sec3-content">
          <h4>Tariffs</h4>
          <h1>Choose your plan</h1>
          <p>
          “Listen up, ladies and gentlemen, our fugitive has been on the run for ninety minutes. Average foot speed over uneven ground barring injuries is 4 miles-per-hour. That gives us a radius of six miles. What I want from each and every one of you is a hard-target search of every gas station, residence, warehouse, farmhouse, henhouse, outhouse and doghouse in that area. Checkpoints go up at fifteen miles. Your fugitive's name is Dr. Richard Kimble. Go get him.”
          </p>
        </div>
        <div class="sec3-box">
          <div class="sec3-boxes">
            <div class="sec3-box-content">
              <div class="sec3-one">Easy Surfing</div>
              <div class="sec3-two" style={{ backgroundColor: "red" }}>
                Internet
              </div>
              <div class="sec3-three">
                <h2>$6.99</h2>
                <h5>Month</h5>
                <p>The internet is a great way to get on the net</p>
              </div>
             <button id="btn5"><Link to="/product">See More</Link></button>
            </div>
          </div>
          <div class="sec3-boxes">
            <div class="sec3-box-content">
              <div class="sec3-one">Impression</div>
              <div class="sec3-two" style={{ backgroundColor: "red" }}>
                Tv
              </div>
              <div class="sec3-three">
                <h2>$15.99</h2>
                <h5>Month</h5>
                <p>Form will determine the nature of content.</p>
              </div>
              <button id="btn5"><Link to="/product">See More</Link></button>
            </div>
          </div>
          <div class="sec3-boxes">
            <div class="sec3-box-content">
              <div class="sec3-one">Premium Plan</div>
              <div class="sec3-two" style={{ backgroundColor: "red" }}>
                Internet + Tv +phone
              </div>
              <div class="sec3-three">
                <h2>$19.99</h2>
                <h5>Month</h5>
                <p>Movies are expensive formof therapy for me.</p>
              </div>
              <button id="btn5"><Link to="/product">See More</Link></button>
            </div>
          </div>
        </div>
      </div>

      <div class="section4" id="blog">
        <div class="head5">
          Check availability to connect our services in your area
        </div>
        <img
          src="./section4-bg.jpg"
          alt=""
          srcset=""
          style={{ borderBottom: "1px solid black" }}
        />
        <div class="section4-1">
          <img src="./section4-img.png" alt="" srcset="" />
          <div class="section4-2">
            <p>enter your email to create or restart your membrership</p>
            <div class="inp-btn">
              <input type="text" placeholder="Enter your address" />
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div class="section5">
        <div class="col-lg-3 sec5-col1">
          <img src="./section5.jpg" alt="" srcset="" />
        </div>
        <div class="col-lg-7 sec5-col2">
          <div class="head6">What our clients say</div>
          <div class="sec5-row2">
            <div class="miller-group">
              <img src="./section5.jpg" class="miller" alt="" srcset="" />
              Miller
            </div>

            <img src="./quote.png" class="quote" alt="" srcset="" />
          </div>
          <p>
          Movies about customer feedback often explore the significance of customer opinions in various industries, shedding light on their impact on product development and business success. These films often highlight the power of constructive criticism and the role of customer satisfaction in shaping a company's trajectory. Through compelling narratives, they emphasize how listening to and acting upon customer feedback can lead to innovation, underlining the essential role that feedback plays in contemporary business practices.
          </p>
        </div>
      </div>

      <div class="section6" id="contact">
        <div class="col-lg-3 sec6-col1">
          <p>Subscribe Now</p>
        </div>
        <div class="col-lg-7 sec6-col2">
          <input type="search" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <hr />

      <Fotter />
    </div>
  );
};

export default Home;
