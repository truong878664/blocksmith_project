import Logo from "../../assets/Logo";
import Circle2 from "../../components/circleGradient3";

function Footer() {
  return (
    <footer>
      <div className="relative">
        <div className="mt-16 mx-4 pb-6">
          <div className="text-4xl font-bold mb-6">
            <span>Work with Blocksmith Labs</span>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-black px-4 py-3 rounded-full border ">
              <span className="text-lg font-bold">Work with us</span>
            </button>
            <button className="bg-black text-white px-4 py-3 rounded-full border border-white hover:bg-white hover:text-black ">
              <span className="text-lg font-bold">Join Discord</span>
            </button>
          </div>
          <div className="mb-10 mt-20">
            <div className="text-3xl flex items-center">
              <Logo fill="white" className="mr-2" />
              <span className="font-bold mr-2">Blocksmith</span>
              <span>Labs</span>
            </div>
            <ul className="text-lg font-bold flex flex-col gap-2 mt-4">
              <li>Twitter</li>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Contact</li>
            </ul>
          </div>
          <hr className="border-stone-500" />
          <div className="mt-12 text-xs">
            <span>2023 Blocksmith Labs. All right reserved.</span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-full w-full z-[-1] overflow-clip">
          <Circle2 className="" />
        </div>
      </div>
      {/* <Circle className=""/> */}
    </footer>
  );
}

export default Footer;
