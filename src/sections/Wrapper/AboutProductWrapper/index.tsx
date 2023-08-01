// function AboutProductWrapper(props:any, ref:any) {

import React from "react";

const AboutProductWrapper = React.forwardRef(
  (props: any, ref: React.Ref<HTMLDivElement>) => {
    return (
      <section
        id="about-product-wrapper"
        data-mode=""
        className="bg-white text-black data-[mode='dark']:bg-black data-[mode='dark']:text-white transition-all duration-500"
        ref={ref}
      >
        {props.children}
      </section>
    );
  }
);

export default AboutProductWrapper;
