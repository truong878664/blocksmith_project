import imageTeams from "./imageTeams";

type Person = {
  img: string;
  name: string;
  title: string;
  describe: string;
  id: string | number;
};

const defaultDescribe: string = `Decade of experience building and shipping world-class products and
leading teams at top tech companies, now a prominent figure in the
Solana ecosystem. Co-CEO Cryptonent drives marketing efforts to
attract new customers by developing and implementing strategies,
building relationships, and finding promotional opportunities.`;

function Person({
  img = "Cryptonent",
  name = "Harmy",
  title = "CEO",
  describe = defaultDescribe,
  id = 1,
}: Person) {
  return (
    <div className="aspect-[5/6] bg-stone-700 relative overflow-hidden group">
      <input
        type="checkbox"
        hidden
        id={`person-index-${id}`}
        className="peer/person"
      />
      <label
        htmlFor={`person-index-${id}`}
        className="absolute top-0 left-0 right-0 bottom-0 z-[11]"
      ></label>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-stone-600/60 text-white text-sm mt-3 px-6 py-2 rounded-full backdrop-blur-sm transition-all -translate-y-[140%] group-hover:translate-y-0">
        View Details
      </div>
      <div className="w-full">
        <img src={imageTeams[img]} alt="" className="w-full object-cover" />
      </div>
      <div className="w-full h-1/5 text-white bg-stone-800/40 backdrop-blur-lg absolute bottom-0 p-5 left-0 z-10 duration-500 transition-all flex flex-col justify-between peer-checked/person:h-full group">
        <div className="flex justify-between mb-10">
          <div className="flex flex-col ">
            <span className="text-xl font-bold">{name}</span>
            <span className="text-xl">{title}</span>
          </div>
          <div className="text-stone-300 text-2xl">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="font-bold tracking-tighter opacity-0 peer-checked/person:group-[]:opacity-100 delay-300 transition-all duration-500">
          <p>{describe}</p>
        </div>
      </div>
    </div>
  );
}

export default Person;
