type ItemRoadMap = {
  img: string;
  title: string;
  id: number | string;
};

function ItemRoadMap({ img = "", title = "", id }: ItemRoadMap) { 
  const className = ["md:grid-in-[Products] md:grid-in-[Brand] md:grid-in-[Expansion] md:grid-in-[Community]"]
  return (
    <div className={`h-[400px] text-white relative overflow-hidden md:grid-in-[${title}]`}>
      <input
        type="checkbox"
        id={`roadmap-index-${id}`}
        className="peer/roadmap"
      />
      <label
        htmlFor={`roadmap-index-${id}`}
        className="absolute top-0 left-0 right-0 bottom-0 z-10"
      ></label>

      <div className="roadmap-index absolute top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur opacity-0 z-[1] peer-checked/roadmap:opacity-100 transition-all duration-300"></div>
      <div className="z-[1] px-6 py-8 absolute left-0 bottom-0 h-24 transition-all duration-500 peer-checked/roadmap:h-full group">
        <div className="flex items-start mb-4">
          <span className="mr-4 font-bold text-2xl">{title}</span>
          <span className="text-xl peer-checked/roadmap:group-[]:rotate-180 transition-all duration-700 delay-200">
            <i className="fa-solid fa-circle-chevron-up"></i>
          </span>
        </div>
        <div className="opacity-0 peer-checked/roadmap:group-[]:opacity-100 delay-300 duration-500 transition-all">
          <p>
            With Blocksmith Labs at the forefront, the future of Web3 is looking
            brighter than ever. Our team is dedicated to building multi-chain
            products that have the power to empower millions of creators,
            companies, and individuals. In the coming chapter, we will be
            bringing cutting-edge technologies like ML/AI to our products.
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0">
        <img
          className="w-full h-full object-cover object-right-top"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default ItemRoadMap;
