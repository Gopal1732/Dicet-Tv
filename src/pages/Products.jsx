import React from "react";
import Header from "../components/Header";
import Fotter from "../components/Fotter";

const Products = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <div class="product-card">

          <div class="product-tumb">
            <img src="https://tse2.mm.bing.net/th?id=OIP.pWrpOjWb5nQumUCqfGnNHQHaG7&pid=Api&P=0&h=180" alt="" />
          </div>
          <div class="product-details">
            <h4>
              <a href="">Basic</a>
            </h4>
            <span class="product-catagory">720p(HD)</span>
            <p>
            A basic pack of movies offers a cost-effective selection of essential films, catering to budget-conscious viewers.
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>$6.99</small>$5.88
              </div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="badge">Most Popular</div>
          <div class="product-tumb">
            <img src="https://freevector.co/wp-content/uploads/2014/06/80744-tablet-and-laptop.png" alt="" />
          </div>
          <div class="product-details">
            <h4>
              <a href="">Standard</a>
            </h4>
            <span class="product-catagory">1080p(Full HD)</span>
            <p>
            A standard pack of movies offers a diverse and balanced selection of titles ,catering to a broader range of viewer preferences.
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>$15.49</small>$12.99
              </div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="product-card">

          <div class="product-tumb">
            <img src="https://clipart-library.com/data_images/240864.png" alt="" />
          </div>
          <div class="product-details">
            <h4>
              <a href="">Premium</a>
            </h4>
            <span class="product-catagory">4k(Ultra HD)+HDR</span>
            <p>
            A premium movie pack offers exclusive access to high-quality, enhancing the viewing experience for discerning audiences.
            </p>
            <div class="product-bottom-details">
              <div class="product-price">
                <small>$19.99</small>$16.49
              </div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Products;
