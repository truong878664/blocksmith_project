import crystalImage from "../../assets/img/Crystal.jpg";

function About() {
  return (
    <section>
      <div className="px-4 py-16 md:px-8">
        <div className="border-b border-black pb-14 md:flex md:items-center md:pb-20">
          <div className="text-4xl font-bold leading-none tracking-tighter md:w-1/3">
            <span>Forging the future of Web3, one product at a time</span>
          </div>
          <img src={crystalImage} alt="" className="md:w-2/3"/>
        </div>
        <div className="mt-12 tracking-tight font-bold md:flex md:gap-4 md:text-2xl md:mt-16">
          <p className="mb-4">
            We are driven by a singular mission: to create the best Web3
            products that will enable the next generation of companies, artists,
            individuals, and creators to achieve their full potential.
          </p>
          <p className="">
            We hold ourselves to the highest standards of integrity, trust, and
            transparency which is reflected in the quality of our products,
            which are consistently ranked as the best in the industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
