import Logo from "@/components/Logo";
import SearchInput from "@/components/SearchInput";
import { ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex justify-between py-6 bg-(--background-dark)/80 border-b border-b-[#493f22] sticky top-0 backdrop-blur-sm z-50">
      <Logo />
      <nav className="hidden md:flex items-center gap-9">
        <a
          className="text-sm font-medium leading-normal hover:text-(--primary) transition-colors"
          href="#"
        >
          Shop All
        </a>
        <a
          className="text-sm font-medium leading-normal hover:text-(--primary) transition-colors"
          href="#"
        >
          Collections
        </a>
        <a
          className="text-sm font-medium leading-normal hover:text-(--primary) transition-colors"
          href="#"
        >
          About Us
        </a>
        <a
          className="text-sm font-medium leading-normal hover:text-(--primary) transition-colors"
          href="#"
        >
          Contact
        </a>
      </nav>
      <SearchInput />
      <div className="flex gap-2">
        <div className="bg-(--surface-dark) flex items-center justify-center p-2 rounded-[4px] ">
          <User fill="white" />
        </div>
        <div className="bg-(--surface-dark) flex items-center justify-center p-2 rounded-[4px] ">
          <ShoppingBag />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
