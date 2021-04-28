import React from "react";
import { FeaturedProducts, Hero, Contact } from "../components";
// import { Services } from "../components";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      {/* <Services /> */}
      <Contact />
    </main>
  );
};

export default HomePage;
