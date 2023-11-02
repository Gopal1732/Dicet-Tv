import React from "react";
import Fotter from "../components/Fotter";
import Header from "../components/Header";

const Blog = () => {
  return (
    <div>
      <Header />
      <div class="category-name">BLOGS</div> <br />
      <div class="card-category-1">
        <div class="basic-card basic-card-aqua">
          <div class="card-content" >
            <span class="card-title">SLEIGHT</span>
            <p class="card-text">
            "Sleight," a 2016 film, masterfully intertwines street magic and science fiction, portraying the struggles of a gifted young magician as he navigates the challenges of life in a gritty urban environment, delivering a unique and thought-provoking cinematic experience.
            </p>
          </div>

          <div class="card-link">
            <a href="#" title="Read Full">
              <span>Read Full</span>
            </a>
          </div>
        </div>

        <div class="basic-card basic-card-lips">
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
        </div>
      </div>
      <br />
      <Fotter />
    </div>
  );
};

export default Blog;
