import TeamItems from "./TeamItems";

function Team() {
  return (
    <section id="team">
      <div className="bg-white text-black px-4 py-16 md:px-8">
        <div className="container-center">
          <div className="text-5xl font-bold md:text-6xl">
            <span>Blocksmith Labs Team</span>
          </div>
          <TeamItems />
        </div>
      </div>
    </section>
  );
}

export default Team;
