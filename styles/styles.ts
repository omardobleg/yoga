export const styles = [
  `
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
`,
];
