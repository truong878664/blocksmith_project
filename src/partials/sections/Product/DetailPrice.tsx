function DetailPrice() {
  return (
    <div className="bg-white text-black px-4 py-16 md:px-8">
      <div className="container-center">
        <div className="bg-black text-white relative p-6 font-bold overflow-clip">
          <div className="text-5xl relative z-[1] tracking-tighter md:text-6xl">
            <span className="w-1/2 block">Ouruniverse runs on $FORGE</span>
          </div>
          <div className="py-20 md:py-28" />
          <div className="absolute -right-10 top-[25%] w-3/4 md:w-8/12">
            <img
              src="src/assets/img/product/Coins.jpg"
              alt=""
              className="object-contain"
            />
          </div>
          <div className="z-[1] relative text-xl tracking-tighter leading-none md:text-2xl">
            <p>
              The $FORGE token is the primary utility token of the Blocksmith
              Labs ecosystem. All the tools and apps within the ecosystem
              incorporate $FORGE and provide utility for the Smyths holders.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 font-bold text-xl md:text-2xl md:grid-areas-price lg:md:grid-areas-none lg:grid-cols-4">
          <div className="border border-black p-4 bg-black text-white md:grid-in-price lg:grid-in-auto">
            <span className="block">$FORGE Price</span>
            <span className="block md:text-4xl xl:text-5xl">$0.09</span>
          </div>
          <div className="border border-black p-4 md:grid-in-change lg:grid-in-auto">
            <span className="block">24h Price Change</span>
            <span className="block md:text-4xl xl:text-5xl">-0.173%</span>
          </div>
          <div className="border border-black p-4 md:grid-in-valuation lg:grid-in-auto">
            <span className="block">Fully Diluted valuation</span>
            <span className="block md:text-4xl xl:text-5xl">$4,127,304</span>
          </div>
          <div className="border border-black p-4 md:grid-in-volume lg:grid-in-auto">
            <span className="block">Total Volume</span>
            <span className="block md:text-4xl xl:text-5xl">11,937.7 SOL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPrice;
