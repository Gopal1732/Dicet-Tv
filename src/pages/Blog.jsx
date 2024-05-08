import React, { useEffect, useState } from "react";
import Fotter from "../components/Fotter";
import Header from "../components/Header";
import axios from "axios";

const Blog = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getroutes = async () => {
      const response = await axios.get("http://localhost:8000/blogs");
      console.log(response);
      setdata(response.data);
    }
    getroutes();
  }, []);
  return (
    <div>
      <Header />
      <div class="category-name">BLOGS</div> <br />
      <div class="card-category-1">
        {
          data.map((blog)=>{
            return  <div class={"basic-card "+(blog.id%2==0?"basic-card-aqua":"basic-card-lips")}>
            <div class="card-content" >
              <span class="card-title">{blog.title}</span>
              <p class="card-text">
               {blog.full_text}
              </p>
            </div>
  
            {/* <div class="card-link">
              <a href="#" title="Read Full">
                <span>Read Full</span>
              </a>
            </div> */}
          </div>
          })
        }

        {/* <div class="basic-card basic-card-lips">
          <div class="card-content">
            <span class="card-title">HATSUNE MIKU</span>
            <p class="card-text">
              Hatsune Miku, the virtual pop sensation, hasn't had her standalone , but her iconic presence has a vast collection of animated music videos created by fans, and she continues to exert a profound influence on the crossroads of animation and music culture globally.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read Full</span>
            </a>
          </div>
        </div>

        <div class="basic-card basic-card-light">
          <div class="card-content">
            <span class="card-title">Israel-Palestine </span>
            <p class="card-text">
              The Israel-Palestine conflict is a long-standing and deeply rooted dispute over territory, with both sides claiming historical and political rights to the land. The ongoing conflict has resulted in decades of tension, violence, and international efforts to broker peace.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read Full</span>
            </a>
          </div>
        </div>

        <div class="basic-card basic-card-dark">
          <div class="card-content">
            <span class="card-title">BAYWATCH</span>
            <p class="card-text">
              The "Baywatch" movie, released in 2017, was a comedy adaptation of the popular '90s TV series, featuring Dwayne Johnson and Zac Efron as lifeguards. It blended humor with action and beachfront drama take on the beloved beach-rescue concept.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read Full</span>
            </a>
          </div>
        </div> */}
      </div>
      <br />
      <Fotter />
    </div>
  );
};

export default Blog;
