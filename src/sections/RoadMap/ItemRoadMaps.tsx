import ItemRoadMap from "../../components/RoadMap/ItemRoadMap";
import dataRoadMaps from "../../data/dataRoadMap";

function ItemRoadMaps() {
  return (
    <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-none md:grid-areas-roadmap">
      {dataRoadMaps.map((item, index) => (
        <ItemRoadMap key={index} img={item.img} title={item.title} id={index} />
      ))}
      <div className="h-[400px] border border-black px-8 pb-5 relative flex items-end w-full overflow-hidden md:grid-in-[ourCommunity]">
        <img src="src/assets/img/roadMap/Discord.jpg" alt=""  className="absolute top-0 right-0 bottom-0 object-right"/>
        <div className="relative">
          <span className="text-4xl font-bold">Join our Community</span>
          <div className="mt-2">
            <button className="bg-black text-white px-6 py-4 rounded-full border-2 border-black hover:bg-white hover:text-black ">
              <span className="text-xl font-bold mr-4">Discord</span>
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

export default ItemRoadMaps;
