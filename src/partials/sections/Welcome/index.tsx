import video from "../../../assets/video/crystal.mp4";
import Circle from "../../../components/circleGradient3";
import herostone from "../../../assets/img/herostone.png";
import herostone2 from "../../../assets/img/herostone2.png";
import herostone3 from "../../../assets/img/herostone3.png";

function ContentWelcome() {
  return (
    <div className="w-full overflow-hidden h-[150vh] flex flex-col">
      <div className="flex flex-col justify-center mx-auto relative max-w-[1280px] w-full flex-1 mb-10 px-10">
        <div className="font-bold text-4xl text-center mb-10 tracking-tighter mx-4 md:text-5xl lg:text-8xl">
          <span>The best builders in the industry</span>
        </div>
        <div className="mt-10">
          <video
            className="mx-auto w-full max-w-[448px]"
            src={video}
            autoPlay
            muted
            loop
          />
        </div>

        <div className="">
          <img
            className="absolute right-0 translate-x-[40%] top-1/4"
            src={herostone3}
            alt=""
          />

          <img
            className="absolute left-0 -translate-x-[40%] top-2/3"
            src={herostone2}
            alt=""
          />

          <img
            className="absolute right-0 -bottom-10 translate-x-[10%] md:-bottom-[10%]"
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

export default ContentWelcome;
