import video from "../../../assets/video/crystal.mp4";
import Circle from "../../../components/circleGradient3";
import herostone from "../../../assets/img/herostone.png";
import herostone2 from "../../../assets/img/herostone2.png";
import herostone3 from "../../../assets/img/herostone3.png";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

type Props = {
  children?: React.ReactNode;
};
const ContentWelcome = React.forwardRef(
  (_props: Props, ref: React.Ref<HTMLDivElement>) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("#image-heros-stone-2", {
        scrollTrigger: {
          trigger: "#image-heros-stone-2",
          start: "center center",
          scrub: 1,
        },
        y: -200,
        filter: "blur(20px)",
      });
      gsap.to("#image-heros-stone-1", {
        scrollTrigger: {
          trigger: "#image-heros-stone-1",
          start: "top bottom",
          scrub: 1,
        },
        y: "-100%",
        filter: "blur(20px)",
      });

      gsap.to("#image-heros-stone-3", {
        scrollTrigger: {
          trigger: "#image-heros-stone-3",
          start: "center bottom",
          scrub: 1,
        },
        y: -100,
      });

    });
    //play video
    useEffect(() => {
      console.log("played video");
      videoRef.current!.play();
    }, []);

    return (
      <div className="w-full overflow-hidden h-[150vh] flex flex-col">
        <div
          data-welcome-panner=""
          ref={ref}
          className="flex flex-col justify-center mx-auto relative max-w-[1280px] w-full flex-1 mb-10 px-10 group/panner-welcome"
        >
          <div className="font-bold text-4xl text-center mb-10 tracking-tighter mx-4 md:text-5xl lg:text-8xl -translate-y-full opacity-0 transition-all delay-500 duration-700 group-data-[welcome-panner='active']/panner-welcome:translate-y-0 group-data-[welcome-panner='active']/panner-welcome:opacity-100">
            <span>The best builders in the industry</span>
          </div>
          <div className="mt-10 translate-y-full opacity-0 transition-all delay-500 duration-1000 group-data-[welcome-panner='active']/panner-welcome:translate-y-0 group-data-[welcome-panner='active']/panner-welcome:opacity-100">
            <video
              ref={videoRef}
              className="mx-auto w-full max-w-[448px]"
              src={video}
              autoPlay={true}
              loop={true}
              muted
              playsInline
            />
          </div>

          <div className="group">
            <img
              id="image-heros-stone-3"
              className="absolute -right-1/2 md:right-0 translate-x-[40%] top-1/2 opacity-0 transition-opacity delay-1000 duration-1000 group-data-[welcome-panner='active']/panner-welcome:group-[]:opacity-100 md:block"
              src={herostone3}
              alt=""
            />

            <img
              id="image-heros-stone-2"
              className="absolute left-0 w-40 md:w-auto -translate-x-[40%] top-2/3 opacity-0 transition-opacity delay-1000 duration-1000 group-data-[welcome-panner='active']/panner-welcome:group-[]:opacity-100"
              src={herostone2}
              alt=""
            />

            <img
              id="image-heros-stone-1"
              className="absolute right-0 hidden -bottom-20 translate-x-[10%] md:-bottom-[40%] lg:block"
              src={herostone}
              alt=""
            />
          </div>
        </div>
        <div className="max-h-[40vh]">
          <Circle />
        </div>
      </div>
    );
  }
);

export default ContentWelcome;
