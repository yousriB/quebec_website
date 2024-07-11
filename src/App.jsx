import React from "react";
import styles, { layout } from "./style";
import {
  Navbar,
  Hero,
  About,
  Services,
  Contact,
  ImageSliderWidget,
  Testemonial,
  Footer,
  Partner,
  Stage,
  Static,
} from "./components";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <div className="w-full absolute">
        <div className={`${styles.paddingX} py-5`}>
          <Navbar />
        </div>
      </div>
      <Hero />
      <Partner />
      <About />
      <Services />
      <Static />
      <Stage />
      <Testemonial />
      <ImageSliderWidget />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
