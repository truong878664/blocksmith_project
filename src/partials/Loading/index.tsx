import { useEffect, useRef } from "react";
import HeaderLoading from "./HeaderLoading";
import gsap from "gsap";

function Loading() {
  const PercentLoadingRef: React.RefObject<HTMLSpanElement> = useRef(null);
  const groupLoadingRef: React.RefObject<HTMLDivElement> = useRef(null);
  const wrapperLoadingRef: React.RefObject<HTMLDivElement> = useRef(null);
  let durationLoading = 3;
  const counterLoading = {
    value: 0,
  };
  
  if(localStorage.getItem("isVisiter") !== null) {
      counterLoading.value = 75;
      durationLoading = 2;
  }
  localStorage.setItem("isVisiter", "true");
  console.log(123);
  
  useEffect(() => {
    enum TimeEndLoading {
      hide = 1000,
      remove = 1500,
    }
    const updatePercentLoading = () => {
      const value = Math.floor(counterLoading.value);
      PercentLoadingRef.current!.innerText = value.toString();
    };
    const endLoading = () => {
      setTimeout(() => {
        groupLoadingRef.current!.dataset.status = "hidden";
      }, TimeEndLoading.hide);
      setTimeout(() => {
        wrapperLoadingRef.current!.remove();
      }, TimeEndLoading.remove);
    };
    gsap.to(counterLoading, {
      duration: durationLoading,
      value: 100,
      onUpdate: updatePercentLoading,
    });
    gsap.to("#bar-loading", {
      duration: durationLoading,
      width: "100%",
      onComplete: endLoading,
    });
  });
  return (
    <div
      ref={wrapperLoadingRef}
      className="fixed top-0 left-0 right-0 bottom-0 z-50"
      id="wrapper-loading"
    >
      <div
        data-status=""
        ref={groupLoadingRef}
        id="group-loading"
        className="z-[11] relative w-full h-full group/loading peer/loading"
      >
        <div className="group-data-[status='hidden']/loading:-translate-y-full transition-all duration-500">
          <HeaderLoading fill="black" />
        </div>

        <div
          id="bar-loading"
          className="bar-loading absolute top-0 left-0 overflow-hidden w-0 group-data-[status='hidden']/loading:-translate-y-full transition-all duration-500"
        >
          <HeaderLoading fill="white" />
        </div>

        <div className="absolute right-0 bottom-0 p-4  transition-all duration-500 group-data-[status='hidden']/loading:translate-y-full">
          <span
            ref={PercentLoadingRef}
            className="text-[200px] md:text-[250px] lg:text-[300px] leading-none font-bold"
            id="percent-loading"
          >
          </span>
        </div>
      </div>
      <div
        id="overlay"
        className="absolute top-0 left-0 right-0 bottom-0 bg-black z-10 peer-data-[status='hidden']/loading:bg-black/0 transition-all delay-500 duration-500"
      ></div>
    </div>
  );
}

export default Loading;
