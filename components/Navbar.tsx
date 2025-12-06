import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import SearchInput from "@/components/SearchInput";
import { ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex justify-between gap-4 py-6 bg-(--background-dark)/80 border-b border-b-[#493f22] sticky top-0 backdrop-blur-sm z-50">
      <Logo />
      <Navigation />
      <SearchInput />
      <div className="flex gap-2">
        <div className="bg-(--surface-dark) flex items-center justify-center p-2 rounded-sm ">
          <User fill="white" />
        </div>
        <div className="bg-(--surface-dark) flex items-center justify-center p-2 rounded-sm ">
          <ShoppingBag />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
