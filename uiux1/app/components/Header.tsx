import Link from "next/link"; // O Router do Next é built-in
import { PhoneIcon, MenuIcon } from "lucide-react";
import NavBtn from "./NavBtn";

const Header = () => {
  return (
    // Mantive as classes do Tailwind originais
    <header className="fixed border-b border-b-zinc-300 bg-white/50 backdrop-blur-lg min-w-full py-6 lg:py-7 px-4 sm:px-8 max-w-7xl overflow-x-clip z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl relative uppercase tracking-tight text-zinc-900 font-impact">
          {/* Link do Next usa 'href' em vez de 'to' */}
          <Link href="/">
            Furniture <sup className="absolute font-thin text-xs">TM</sup>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavBtn active={true}>Home</NavBtn>
          <NavBtn>About</NavBtn>
          <NavBtn>Shop</NavBtn>
          <NavBtn>Gallery</NavBtn>
          <NavBtn>Service</NavBtn>

          <button className="flex items-center space-x-2 bg-zinc-900 text-white text-sm py-4 px-6 rounded-full cursor-pointer transition-all duration-150 ease-in ml-4 hover:bg-transparent border border-zinc-900 hover:text-zinc-900">
            <PhoneIcon className="w-4 h-4" />
            <span>Contact</span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MenuIcon className="w-6 h-6 text-zinc-900" />
        </div>
      </div>
    </header>
  );
};

export default Header;