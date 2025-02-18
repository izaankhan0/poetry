import "./styles/app.css";
import sketch from "./assets/sketch.png";
import Card from "./components/card";

export default function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1>College Poet</h1>
        <a href="">
          <button className="portfolio">Portfolio</button>
        </a>
      </div>

      <div className="mid">
      <div className="left">

      </div>
      <img className="sketch" src={sketch} alt="" />
        <div className="right">

          <h2>IZAAN KHAN</h2>
          <p>"I let out feelings in the disguise of poems; never otherwise"</p>
        </div>
      </div>

      <div className="card-grid">
        <Card
          title="Title One"
          description="Lorem ipsum"
          bgc="rgb(187, 72, 0, 0.9)"
        />
        <Card
          title="Title One"
          description="Lorem ipsum"
          bgc="rgb(187, 72, 0, 0.9)"
        />
        <Card
          title="Title One"
          description="Lorem ipsum"
          bgc="rgb(187, 72, 0, 0.9)"
        />
        <Card
          title="Title One"
          description="Lorem ipsum"
          bgc="rgb(187, 72, 0, 0.9)"
        />
        <Card
          title="Title One"
          description="Lorem ipsum"
          bgc="rgb(187, 72, 0, 0.9)"
        />
        <Card
          title="Title One"
          description="Lorem ipsum"
          bgc="rgb(187, 72, 0, 0.9)"
        />
        <Card
          title="Title One"
          description="Lorem ipsum"
          bgc="rgb(187, 72, 0, 0.9)"
        />
        <Card
          title="Title One"
          description="Lorem ipsum"
          bgc="rgb(187, 72, 0, 0.9)"
        />
      </div>
    </div>
  );
}
