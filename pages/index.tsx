/** @jsx h */
import { h, IS_BROWSER, PageConfig, useState } from "../deps.ts";
import { suryaImage } from "../utils/image.ts";

export default function Home() {
  return (
    <section className="cards">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
      ></link>
      <div style={`max-width: 500px;margin: auto;`}>
        <img
          className="logo"
          src={suryaImage}
          style={`width: 100%;height: auto;`}
          width="300"
          height="150"
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
