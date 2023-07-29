import Logo from "../../assets/Logo.tsx";
import ButtonHeader from "./ButtonHeader.tsx";
function Header() {
  return (
    <header>
      <div className="flex justify-between px-4 mt-3 items-center">
        <Logo fill="#fff"/>
        <ButtonHeader />
      </div>
    </header>
  );
}

export default Header;
