import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/HEADER/Header";
import Hero from "./Components/HERO/Hero";
import Skills from "./Components/SKILLS/Skills";
import Projects from "./Components/PROJECTS/Projects";
import Footer from "./Components/REACH ME/Footer";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Skills />
    <Projects />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
