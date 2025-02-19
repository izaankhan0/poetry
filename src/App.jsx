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
        <h2>My Poetry Page</h2>
        <p>"Letting out feelings in the disguise of poems"</p>
      </div>
      <h3>by yours truely</h3>
      <div className="card-grid">
        <Card title="Title One" description="Lorem ipsum" bgc="#0b012e" />
        <Card title="Title One" description="Lorem ipsum" bgc="#0b012e" />
        <Card title="Title One" description="Lorem ipsum" bgc="#0b012e" />
        <Card title="Title One" description="Lorem ipsum" bgc="#0b012e" />
      </div>
    </div>
  );
}
