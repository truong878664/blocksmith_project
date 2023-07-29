import ItemRoadMaps from "./ItemRoadMaps";

function RoadMap() {
  return (
    <section>
      <div className="px-4 bg-white text-black py-16">
        <div className="text-5xl font-bold tracking-tighter">
          <span>The roadmap Of our vision</span>
        </div>
        <ItemRoadMaps/>
      </div>
    </section>
  );
}

export default RoadMap;
