import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Product from "./sections/Product";
import Team from "./sections/Team";
import RoadMap from "./sections/RoadMap";
import Footer from "./sections/Footer";

const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <Welcome />
    <section>
      <div id="about-product-wrapper" className="bg-white text-black">
        <About />
        <Product />
      </div>
    </section>
    <Team />
    <RoadMap />
    <Footer />
  </React.StrictMode>
);
