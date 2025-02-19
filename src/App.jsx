import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";
import Card from "./components/Card";
import Poem from "./pages/poem";

function Home() {
  return (
    <div className="App">
      <div className="nav">
        <h1>College Poet</h1>
        <a href="#">
          <button className="portfolio">Portfolio</button>
        </a>
      </div>

      <div className="mid">
        <h2>My Poetry Page</h2>
        <p>"Letting out feelings in the disguise of poems"</p>
      </div>
      <h3>by yours truly</h3>
      <div className="card-grid">
        <Card
          title="Walking In The Rain"
          bgc="#0b012e"
          link="/poem1"
        />
        <Card
          title="Poem Two"
          description="Lorem ipsum"
          bgc="#0b012e"
          link="/poem2"
        />
        <Card
          title="Poem Three"
          description="Lorem ipsum"
          bgc="#0b012e"
          link="/poem3"
        />
        <Card
          title="Poem Four"
          description="Lorem ipsum"
          bgc="#0b012e"
          link="/poem4"
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/poem1"
          element={
            <Poem
              title="Walking In The Rain "
              date="August 2, 2023"
              author="by Izaan Khan"
              poem={`I love walking alone in heavy rain,
        so without anyone knowing, I cry out all my pain,
        
        Many people around u but u can tell this to none,
        heck I don't even know how these feelings begun,

        this wound I have is no one's fault,
        I distance myself and take a halt,
        but my heart loves her and starts to revolt,

        this seed of disparity in my heart I sow,
        I love her, probably something she'll never know,

        I just wish this disappears and I easen,
        alas its called falling in love for a reason,
        sometimes this heart of mine does season,
        cuz everything my lord does, has its reason,

        the weather doesn't hint it but I'll say it again,
        I love walking alone in heavy rain,
        so without anyone knowing, I cry out all my pain`}
              alignments={[
                "left", "left",   
                "",               
                "right", "right", 
                "",               
                "left", "left", "left",
                "",               
                "right", "right",
                "",               
                "left", "left", "left",  "left",
                "",               
                "right", "right", "right"
              ]}
        />
          }
        />
        <Route
          path="/poem2"
          element={
            <Poem
              title="Walking In The Rain "
              date="Feb 20, 2025"
              author="by Izaan Khan"
              poem={``}
              alignments={[
                "left", "left",   
                "",               
                "right", "right", 
                "",               
                "left", "left", "left",
                "",               
                "right", "right",
                "",               
                "left", "left", "left",  "left",
                "",               
                "right", "right", "right"
              ]}
        />
          }
        />
        <Route
          path="/poem3"
          element={
            <Poem
              title="Walking In The Rain "
              date="Feb 20, 2025"
              author="by Izaan Khan"
              poem={``}
              alignments={[
                "left", "left",   
                "",               
                "right", "right", 
                "",               
                "left", "left", "left",
                "",               
                "right", "right",
                "",               
                "left", "left", "left",  "left",
                "",               
                "right", "right", "right"
              ]}
        />
          }
        />
        <Route
          path="/poem4"
          element={
            <Poem
              title="Walking In The Rain "
              date="Feb 20, 2025"
              author="by Izaan Khan"
              poem={``}
              alignments={[
                "left", "left",   
                "",               
                "right", "right", 
                "",               
                "left", "left", "left",
                "",               
                "right", "right",
                "",               
                "left", "left", "left",  "left",
                "",               
                "right", "right", "right"
              ]}
        />
          }
        />
      </Routes>
    </Router>
  );
}
