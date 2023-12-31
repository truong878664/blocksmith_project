import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import imageProducts from "./imageProduct";

type ItemProduct = {
  img: string;
  logo: string;
  describe: string;
  id: number | string;
};

function ItemProduct({ img, logo, describe, id }: ItemProduct) {
  const queryItemProduct = `item-product-gsap-${Number(id) + 1}`;
  const productItemRef: React.Ref<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const gsapPromise = new Promise((resolve) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(`.${queryItemProduct}`, {
        scrollTrigger: {
          trigger: `.${queryItemProduct}`,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
        duration: 3,
        opacity: 1,
      });
      setTimeout(() => {
        resolve("Add success position animation to item product");
      }, 1000);
    });
    gsapPromise.then(() => {
      productItemRef.current!.dataset.position = "sticky";
    });
  });

  return (
    <div
      ref={productItemRef}
      data-position=""
      className={`min-h-screen py-16 bg-black text-white px-4 border-y border-stone-500 data-[position='sticky']:top-[-1px] data-[position='sticky']:sticky grid place-content-center`}
    >
      <div
        className={`flex flex-col justify-center items-center gap-6 container-center md:flex-row md:px-8 opacity-0 ${queryItemProduct}`}
      >
        <div className="relative h-full md:w-[55%]">
          <img
            src={imageProducts[img]}
            alt=""
            className="rounded-t-xl w-full h-full object-cover object-top"
          />
          <div className="w-3/4 absolute left-6 bottom-1 z-[1]">
            <img src={imageProducts[logo]} alt="" />
          </div>
          <div className="absolute w-full h-20 left-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        <div className="border rounded-lg p-10 text-xl font-bold tracking-tighter h-full leading-tight md:w-[45%] md:text-2xl lg:text-3xl">
          <p>{describe}</p>
          <div className="mt-4 flex justify-end">
            <button className="bg-white text-black py-4 px-6 rounded-full text-base lg:text-xl">
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
