import TeamItems from "./TeamItems";

function Team() {
  return (
    <section>
      <div className="bg-white text-black px-4 py-16 md:px-8">
        <div className="text-5xl font-bold md:text-6xl">
          <span>Blocksmith Labs Team</span>
        </div>
        <TeamItems/>
      </div>
    </section>
  );
}

export default Team;
