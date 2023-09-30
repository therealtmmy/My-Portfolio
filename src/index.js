import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/HEADER/Header";
import Hero from "./Components/HERO/Hero";
import SkillsCard from "./Components/SKILLS/Skills";
import ProjectsCard from "./Components/PROJECTS/Projects";
import Footer from "./Components/REACH ME/Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <SkillsCard />
    <ProjectsCard />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
