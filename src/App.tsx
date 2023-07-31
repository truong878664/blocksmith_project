import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Product from "./sections/Product";
import Team from "./sections/Team";
import RoadMap from "./sections/RoadMap";
import Footer from "./sections/Footer";
import Describe from "./partials/sections/Product/Describe";
import ItemProducts from "./sections/Product/ItemProducts";
import DetailPrice from "./partials/sections/Product/DetailPrice";
import { useEffect, useRef } from "react";
import intersection from "./intersection";

function App() {
  const describeProductsRef = useRef(null);
  const aboutProductWrapperRef: any = useRef(null);

  useEffect(() => {
    intersection({
      element: describeProductsRef.current,
      callback: (entry: any) => {
        aboutProductWrapperRef.current!.dataset.mode = entry.isIntersecting
          ? "dark"
          : "light";
      },
    });
  });

  return (
    <>
      <Welcome />
      <section
        id="about-product-wrapper"
        data-mode=""
        className="bg-white text-black data-[mode='dark']:bg-black data-[mode='dark']:text-white transition-all duration-500"
        ref={aboutProductWrapperRef}
      >
        <About />
        <Product>
          <Describe ref={describeProductsRef} />
          <ItemProducts />
          <DetailPrice />
        </Product>
      </section>
      <Team />
      <RoadMap />
      <Footer />
    </>
  );
}

export default App;
