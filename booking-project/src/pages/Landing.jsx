import React from "react";
import Footer from "../pots/Home/Footer";
import NavLanding from "../pots/Landing/NavLanding";
import LandingHero from "../pots/Landing/LandingHero";
import Properties from "../pots/Landing/Properties";
const Landing = () => {
  return (
    <div>
      <LandingHero />
      <Properties />
      <Footer />
    </div>
  );
};

export default Landing;
