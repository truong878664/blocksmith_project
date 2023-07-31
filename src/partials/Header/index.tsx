import Logo from "../../assets/Logo.tsx";
import ButtonHeader from "./ButtonHeader.tsx";
function Header() {
  return (
    <header>
      <div className="flex justify-between px-4 mt-3 items-center mx-[5%]">
        <Logo fill="#fff" />
        <div className="flex items-center">
          <ul className="gap-4 mr-4 hidden md:flex">
            <li className="hover:font-bold">
              <a href="#about">About</a>
            </li>
            <li className="hover:font-bold">
              <a href="#products">Products</a>
            </li>
            <li className="hover:font-bold">
              <a href="#team">Team</a>
            </li>
            <li className="hover:font-bold">
              <a href="#roadmap">Roadmap</a>
            </li>
          </ul>
          <ButtonHeader />
        </div>
      </div>
    </header>
  );
}

export default Header;
