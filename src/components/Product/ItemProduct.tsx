type ItemProduct = {
  img: string;
  logo: string;
  describe: string;
};

function ItemProduct({ img, logo, describe }: ItemProduct) {
  return (
    <div className="min-h-screen py-16 bg-black text-white px-4 border-y border-stone-500 sticky top-[-1px] grid place-content-center">
      <div className="flex flex-col justify-center items-center gap-6 md:flex-row md:px-8">
        <div className="relative h-full md:w-[55%]">
          <img
            src={img}
            alt=""
            className="rounded-t-xl w-full h-full object-cover object-top"
          />
          <div className="w-3/4 absolute left-6 bottom-1 z-[1]">
            <img src={logo} alt="" />
          </div>
          <div className="absolute w-full h-20 left-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        <div className="border rounded-lg p-10 text-xl font-bold tracking-tighter leading-tight md:w-[45%] md:text-2xl">
          <p>{describe}</p>
          <div className="mt-4 flex justify-end">
            <button className="bg-white text-black py-4 px-6 rounded-full text-base">
              <span className="mr-4">Go to website</span>
              <span className="-rotate-45 inline-block">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
