import ItemRoadMaps from "./ItemRoadMaps";

function RoadMap() {
  return (
    <section>
      <div className="px-4 bg-white text-black py-16">
        <div className="text-5xl font-bold tracking-tighter md:text-6xl md:w-1/2">
          <span>The roadmap Of our vision</span>
        </div>
        <ItemRoadMaps/>
      </div>
    </section>
  );
}

export default RoadMap;
