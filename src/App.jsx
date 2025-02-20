import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";

import Card from "./components/card";
import cardBg1 from "./assets/card-bg-1.png";
import cardBg2 from "./assets/card-bg-2.png";
import cardBg3 from "./assets/card-bg-3.png";
import cardBg4 from "./assets/card-bg-4.png";
import cardBg5 from "./assets/card-bg-5.png";
import cardBg6 from "./assets/card-bg-6.png";
import cardBg7 from "./assets/card-bg-7.png";
import cardBg8 from "./assets/card-bg-8.png";
import Poem from "./pages/poem";

function Home() {
  return (
    <div className="App">
      <div className="nav">
        <h1>College Poet</h1>
        <a href="#">
          {/* <button className="portfolio">Portfolio</button> */}
        </a>
      </div>

      <div className="mid">
        <h2>My Poetry Page</h2>
        <p>"Letting out feelings in the disguise of poems"</p>
      </div>
      <div className="card-grid">
        <Card
          title="Walking In The Rain"
          description="August 2, 2023"
          img={cardBg1}
          link="/poem1"
        />
        <Card
          title="Love - A Crime?"
          description="August 25, 2023"
          img={cardBg2}
          link="/poem2"
        />
        <Card
          title="Fading Echoes of Love"
          description="August 26, 2023"
          img={cardBg3}
          link="/poem3"
        />
        <Card
          title="Triumph or Misfortune?"
          description="September 29, 2023"
          img={cardBg4}
          link="/poem4"
        />
        <Card
          title="So much for Nothing"
          description="October 14, 2023"
          img={cardBg5}
          link="/poem6"
        />
        <Card
          title="Umeedeen? ya Delusions?"
          description="February 18, 2024"
          img={cardBg6}
          link="/poem5"
        />
        <Card
          title="Everyone's Only Human"
          description="May 10, 2024"
          img={cardBg7}
          link="/poem7"
        />
        <Card
          title="Mental Warfare"
          description="July 28, 2024"
          img={cardBg8}
          link="/poem8"
        />

      <h3>by yours truly - Izaan</h3>

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
        so without anyone knowing, I cry out all my pain
        
        Many people around u but u can tell this to none,
        heck I don't even know how these feelings begun

        this wound I have is no one's fault,
        I distance myself and take a halt,
        but my heart loves her and starts to revolt

        this seed of disparity in my heart I sow,
        I love her, probably something she'll never know

        I just wish this disappears and I easen,
        alas its called falling in love for a reason,
        sometimes this heart of mine does season,
        cuz everything my lord does, has its reason

        the weather doesn't hint it but I'll say it again,
        I love walking alone in heavy rain,
        so without anyone knowing, I cry out all my pain.`}
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
              title="Love - A Crime?"
              date="August 25, 2023"
              author="izaan < \ 3"
              poem={`Is it really my fault? Am I really the criminal?
I asked myself again and again, when she said "no, I just can't",
why did I even begin loving her?
knowing the road was this slant,
now all I do is close my eyes and in vain poetry, I chant

"it'll all be okay, it's part of life, don't worry it'll go with ease"
I wish love was this easy to sway,
like gusts of wind, or a winter breeze

I said to myself that I would never fall in love now no matter what,
love didnt come knocking, what could I even do? alas an unfortunate lesson it taught.
              `}
              alignments={[
                "left", "left", "left", "left", "left",
                "",               
                "right", "right", "right",
                "",               
                "left", "left"
              ]}
        />
          }
        />
        <Route
          path="/poem3"
          element={
            <Poem
              title="Fading Echoes of Love"
              date="August 26, 2023"
              author="Izaan Khan"
              poem={`Time can be an astonishing thing,
Like a song, any emotion it can sing

made me meet people with whom I connected & cared,
As if nothing happened, they went off like a flare

But their light always remained in my heart,
The artist faded, but not their art,
Nothing I could do, but watch them depart

Memories of this time, as precious as gold,
To a reality called fate, it was sold.`}
              alignments={[
                "left", "left",   
                "",               
                "right", "right", 
                "",               
                "left", "left", "left",
                "",               
                "right", "right"
              ]}
        />
          }
        />
        <Route
          path="/poem4"
          element={
            <Poem
              title="Triumph or Misfortune?"
              date="September 29, 2023"
              author="Izaan Khan"
              poem={`I sit here, embraced by memories so dear,
              Each one a treasure, bringing a smile so clear

              Moments guided by heart, pure and sincere,
              Yet yielding no fruit, leaving a heart unclear

              Excuses crafted, a delicate charade,
              To be close to her, in the sun or in the shade

              Yet, in the realm of self-respect and grace,
              I chose to ignore, in that silent space

              She passes by, amidst my jovial crew,
              My gaze unmoved, a heart that once knew

              In the tapestry of love, a role so plain,
              Yet, a lover's heartbeat, an everlasting refrain

              In the echo of silence, love's whispers reside,
              In the symphony of moments, where emotions collide`}
              alignments={[
                "left", "left",   
                "",               
                "right", "right", 
                "",               
                "left", "left",
                "",               
                "right", "right",
                "",               
                "left", "left",
                "",               
                "right", "right",
                "",               
                "left", "left",
                "",               
                "right", "right",
              ]}
        />
          }
        />

          <Route
          path="/poem5"
          element={
            <Poem
              title="Umeedeen? ya Delusions?"
              date="February 18, 2024"
              author="Izaan Khan </3"
              poem={`Kuch wazn sa mehsoos hota hai Dil mein,
                Aakhir kis cheez ka? yeh mujhe pata lagana thaa
                
                Ek jungg si kehfiat tari thii Dil mein,
                Kya meri umeedeen aasmaan torr chuki heinn,
                ya mere Dil ke saath kharee hona unka farz thaa?
                
                Kya mera Dil bohot ziada mang raha hai?
                Ya apnee dushmunon ki hifazat ke liye, amooman yeh uska ek bahanaa thaa

                Dil ka dushmun bhi unko keh raha hun jinko dil ka rasta dikhaya tha,
                Kabhi Socha na thaa keh, unki khaamoshiyon ne bhi is dil ko kis qadar rulana thaa
                Ya shayad aisa zindagi mein hota hi nahi,
                Shayad yeh ummideen, mere Dil ka ek jhoota fasana tha.`}
              alignments={[
                "left", "left",   
                "",               
                "right", "right", "right", 
                "",               
                "left", "left",
                "",               
                "right", "right", "right", "right"
              ]}
        />
          }
        />

          <Route
          path="/poem6"
          element={
            <Poem
              title="So much for Nothing"
              date="October 14, 2023"
              author="Izaan </3"
              poem={`In the end it all comes to whether they believed in me or not

                    nights I never slept just to see them proud,
                    just for them to come at my face with their voices loud,
                    we don't believe in you izaan, we don't trust you

                    all I did was for the trust you took,
                    I say nothing, brush it away, but when I'm alone with tear filled eyes I look,
                    I am a man right? why am I even shook?
                    ripped away my heart, I just put away my book

                    I guess this is how one feels when you truly fail,
                    fail such that you'll never prevail,
                    with tear filled eyes I just silently wail,
                    I wish I was just a memory, but here I am, in the storm of reality, a wrecked ship I sail`}
              alignments={[
                "center",   
                "",               
                "left", "left", "left",  
                "",               
                "right", "right", "right", "right",
                "",               
                "left", "left", "left", "left",
              ]}
        />
          }
        />

          <Route
          path="/poem7"
          element={
            <Poem
              title="Everyone's Only Human"
              date="May 10, 2024"
              author="Izaan </3"
              poem={`It accumulates in me, a dread of some kind,
                    Maybe a dread of many things which I can't even see, or maybe my heart has just gone blind

                    I think about it all day, sometimes it overwhelms me and maybe I cry,
                    I'm only human, even if I'm a man I have emotions,
                    I don't know why in our society we're supposed to be shy

                    Maybe I really wish i had someone to tell,
                    Or is it shameful to come out of this fake shell?

                    I buried my emotions deep in my heart,
                    Maybe that was a mistake to start,
                    I tried hard, but couldn't get them to depart

                    In the end all I could do is hide them behind a smile,
                    Kept gathering in my heart in a huge pile.`}
              alignments={[           
                "left", "left",  
                "",               
                "right", "right", "right",
                "",               
                "left", "left",
                "",               
                "right", "right", "right",
                "",               
                "left", "left",
              ]}
        />
          }
        />



          <Route
          path="/poem8"
          element={
            <Poem
              title="Mental warfare"
              date="July 28, 2024"
              author="Izaan </3"
              poem={`Is my burden justified? I always think about this while going through mental distress,
              I thank Allah for his blessings and think I don't have a right to struggle,
              I feel ashamed when I compare this to what's happening to my brothers under war and rubble

              I find myself locked up in my mind with my nagging thoughts,
              Then I start wishing I had some caring knots

              It's a test I tell myself and that it's meant to be,
              I should stand strong but in the sea of mental fatigue I submit and flee

              Everyone is there for you, everyone can be with you, and you can sit in a satisfaction throne,
              You will discover a lot once you're in your mind, you'll discover what it feels like to be truly alone.`}
              alignments={[           
                "left", "left", "left",  
                "",               
                "right", "right",
                "",               
                "left", "left",
                "",               
                "right", "right",
              ]}
        />
          }
        />



      </Routes>
    </Router>
  );
}
