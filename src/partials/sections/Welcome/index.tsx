import video from "../../../assets/video/crystal.mp4";
import Circle from "../../../components/circleGradient";

function ContentWelcome() {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center mx-6">
        <div className="font-bold text-4xl text-center mb-10 tracking-tighter">
          <span>The best builders in the industry</span>
        </div>
        <div className="mt-10">
          <video src={video} autoPlay muted loop />
        </div>
      </div>
      <Circle />
    </div>
  );
}

export default ContentWelcome;
