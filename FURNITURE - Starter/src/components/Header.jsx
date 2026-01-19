import NavBtn from "./NavBtn";
import { PhoneIcon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed border-b border-b-zinc-300 bg-white/50 backdrop-blur-lg min-w-full py-6 lg:py-7 px-4 sm:px-8 max-w-7xl overflow-x-clip z-99">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="text-3xl impact relative uppercase tracking-tight text-zinc-900">
          <Link to="/">Furniture <sup className="absolute font-thin text-xs">TM</sup></Link>
        </div>

        {/* navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          { /* links */}
          <NavBtn active={true}>Home</NavBtn>
          <NavBtn>About</NavBtn>
          <NavBtn>Shop</NavBtn>
          <NavBtn>Gallery</NavBtn>
          <NavBtn>Service</NavBtn>

          {/* contact button */}
          <button className="flex items-center space-x-2 bg-zinc-900 text-white text-sm py-4 px-6 rounded-full cursor-pointer transition-all duration-150 ease-in ml-4 hover:bg-transparent border border-zinc-900 hover:text-zinc-900">
            <PhoneIcon className="w-4 h-4" />
            <span>Contact</span>
          </button>
        </nav>

        {/* mobile menu */}
        <div className="lg:hidden">
          <MenuIcon className="w-6 h-6 text-zinc-900" />
        </div>
      </div>
    </header>
  );
};

export default Header;
