import Logo from "../../assets/Logo";

function HeaderLoading({fill = "black"}: {fill:"black" | "white"}) {

    const theme = {
        black: "bg-black text-white",
        white: "bg-white text-black"
    }
    return ( 
        <div className={`w-screen ${theme[fill]} flex justify-between items-center py-4 px-4 border-b-2`}>
            <Logo fill={fill === "black" ? "white" : "black"} />
            <div className="flex flex-col text-2xl font-bold items-end">
              <span>Blocksmith</span>
              <span>Labs</span>
            </div>
          </div>
     );
}

export default HeaderLoading;