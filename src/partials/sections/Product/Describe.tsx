import React from "react";

const Describe = React.forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div className="container-center" id="describe-products" ref={ref}>
      <div className="px-4 py-12 font-bold md:px-8 md:py-20 md:mt-16">
        <div className="flex flex-col text-4xl mb-12 font-bold md:text-6xl lg:text-7xl">
          <span>Built by</span>
          <span>Blocksmith Labs</span>
        </div>
        <div className="md:text-2xl lg:text-3xl ">
          <p>
            When you see the Built by Blocksmith Labs label, you can trust that
            you are getting a product of the highest quality. From a whitelist
            management platform to dynamic art generation, our team has
            developed solutions to address a variety of real-world problems
            within Web3.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Describe;
