function DetailPrice() {
  return (
    <div className="bg-white text-black px-4 py-16">
      <div className="bg-black text-white relative p-6 font-bold overflow-clip">
        <div className="text-5xl relative z-[1] tracking-tighter">
          <span>Ouruniverse runs on $FORGE</span>
        </div>
        <div className="py-20" />
        <div className="absolute -right-10 top-[25%] w-3/4">
          <img
            src="src/assets/img/product/Coins.jpg"
            alt=""
            className="object-contain"
          />
        </div>
        <div className="z-[1] relative text-xl tracking-tighter leading-none">
          <p>
            The $FORGE token is the primary utility token of the Blocksmith Labs
            ecosystem. All the tools and apps within the ecosystem incorporate
            $FORGE and provide utility for the Smyths holders.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 font-bold text-xl">
        <div className="border border-black p-4 bg-black text-white">
          <span className="block">$FORGE Price</span>
          <span className="block">$0.09</span>
        </div>
        <div className="border border-black p-4">
          <span className="block">24h Price Change</span>
          <span className="block">-0.173%</span>
        </div>
        <div className="border border-black p-4">
          <span className="block">Fully Diluted valuation</span>
          <span className="block">$4,127,304</span>
        </div>
        <div className="border border-black p-4">
          <span className="block">Total Volume</span>
          <span className="block">11,937.7SOL</span>
        </div>
      </div>
    </div>
  );
}

export default DetailPrice;