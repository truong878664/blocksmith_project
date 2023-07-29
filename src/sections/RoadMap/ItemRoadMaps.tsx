import ItemRoadMap from "../../components/RoadMap/ItemRoadMap";
import dataRoadMaps from "../../data/dataRoadMap";

function ItemRoadMaps() {
  return (
    <div className="grid grid-cols-1 gap-4 pt-4">
      {dataRoadMaps.map((item, index) => (
        <ItemRoadMap img={item.img} title={item.title} id={index} />
      ))}
      <div className="aspect-square border border-black px-8 pb-5">
        <img src="src/assets/img/roadMap/Discord.jpg" alt="" />
        <div className="">
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
