import React from "react";
import Home from "../Components/Home/Home.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Achivment from "./Achivements/Achivment.jsx";
import Experiance from "./Experiance/Experiance.jsx";
import Project from "./Projects/Project.jsx";

function Web() {
  return (
    <>
      <Home />
      <About />
      <Achivment />
      <Project />
      <Experiance />
      <Contact />
    </>
  );
}

export default Web;
