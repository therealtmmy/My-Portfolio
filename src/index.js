import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/HEADER/Header";
import Hero from "./Components/HERO/Hero";
import Skills from "./Components/SKILLS/Skills";
import Projects from "./Components/PROJECTS/Projects";
import Footer from "./Components/REACH ME/Footer";
import data from "./Components/SKILLS/data";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const cards = data.map((item) => {
  return <Skills key={item.id} icon={item.icon} skill={item.skill} />;
});

root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <section className="card">
       {cards}
    </section>
    <Projects />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
