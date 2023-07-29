import Person from "../../components/Team/Person";
import dataTeams from "../../data/dataTeams";

function TeamItems() {
    return ( 
        <div className="grid grid-cols-1 gap-4 mt-12">
          {dataTeams.map((person, index) => (
            <Person
              img={person.img}
              name={person.name}
              title={person.title}
              describe={person.describe}
              id={index}
            />
          ))}
        </div>
     );
}

export default TeamItems;