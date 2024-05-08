import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import Fotter from "../components/Fotter";
import axios from "axios";

const About = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getroutes = async () => {
      const response = await axios.get("http://localhost:8000/about");
      console.log(response);
      setdata(response.data);
    }
    getroutes();
  }, []);
  return (
    <div>
      <Header/>
      <section class="articles">
        {
          data.map((about)=>{
            return  <article>
            <div class="article-wrapper">
              <figure>
                <img src={about.images} alt="not available" />
              </figure>
              <div class="article-body">
                <h2>{about.title}</h2>
                <p>
                  {about.description}
                </p>
                {/* <a href="#" class="read-more">
                  Read more <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a> */}
              </div>
            </div>
          </article>
          })
        }
       
         {/* <article>
          <div class="article-wrapper">

            <figure>
              <img src="https://wallpapercave.com/wp/wp4951826.jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2>🍿 Movie Aficionado</h2>
              <p>
              A movie aficionado is a dedicated and passionate lover of cinema, someone who doesn't just watch movies but deeply appreciates the art, storytelling, and craftsmanship behind them. 
              </p>
              <a href="#" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="https://hdqwalls.com/wallpapers/tokyo-ghoul-anime-4k-o1.jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2>🎬 Passionate about Anime </h2>
              <p>
              Passion for anime drives individuals to explore an expansive universe of animated stories, characters, and genres, often leading to lively discussions and a sense of belonging within the anime community.
              </p>
              <a href="#" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/GTYSdDW/world-news-3d-broadcast-animation-red-world-map-background-4k_saomj3mkx_thumbnail-1080_01.png" alt="" />
            </figure>
            <div class="article-body">
              <h2>📺 Entertainment News</h2>
              <p>
              Entertainment news delivers the latest on celebrities and popular culture, offering a delightful blend of gossip, and cultural trends, while keeping audiences connected to the ever-evolving world of entertainment. 
              </p>
              <a href="#" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>   */}
      </section>
      <Fotter />
    </div>
  );
};

export default About;
