/** @jsx h */
import { h, IS_BROWSER, PageConfig, useState } from "../deps.ts";
import { suryaImage } from "../utils/image.ts";

export default function Home() {
  return (
    <section className="cards">
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi"
        async
        rel="preconnect"
      />
      <style>
        {`
      .cards {
    margin: -0.5rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    background-color: #555354;
    min-height:100vh;
    font-family:'Alatsi'
    }
    .menu-item{
      list-style: none;
      margin: auto;
      display: block;
      text-align: center;
      font-size: 2rem;
      color: #edebdf;
      cursor:pointer;
    }
    .menu-item:hover{
      text-decoration:underline;
    }
    .next{
      text-align: center;
      margin-top: 1rem;
      color: #edebdf;
      font-size:2rem
    }
    .title{
      font-size: 2rem;
      text-align: center;
      color: #edebdf;
      margin: 0;
      z-index: 10000;
      display: block;
      position: relative;
    }
    .inverted{
      transform: translate(0.2rem, -1rem) skew(30deg, 0deg);
      color: black;
      opacity: 0.5;
      text-shadow: 0 0 10px rgb(25 25 25 / 90%);
    }
    footer{
    grid-column:1;
    padding: 0 3rem;
    }
    .logo{
      animation: circle 2s ;
    }   
    @keyframes circle {
  0% { clip-path: circle(5%); }
  25% { clip-path: circle(15%); }
  50% { clip-path: circle(25%); }
  100% { clip-path: circle(75%); }
}
`}
      </style>
      <div style={`max-width: 500px;margin: auto;`}>
        <img
          className="logo"
          src={suryaImage}
          style={`width: 100%;height: auto;`}
        />
        <ul style="padding:0">
          <li className="menu-item">Cursos</li>
          <li className="menu-item">Clases</li>
          <li className="menu-item">Videos</li>
          <li className="menu-item">Contacto</li>
        </ul>
        <p className="next">Proximamente📅</p>
        <footer>
          <h1 className="title"> Surya Yoga</h1>
          <h1 className="title inverted"> Surya Yoga</h1>
        </footer>
      </div>
    </section>
  );
}

export const config: PageConfig = { runtimeJS: true };
