import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import SearchInput from "@/components/SearchInput";
import { ShoppingBag, User } from "lucide-react";

const ShopNavbar = () => {
  return (
    <header className="flex justify-between gap-4 px-3 py-4 bg-(--surface-dark)/80 border-b border-b-[#493f22] sticky top-0 backdrop-blur-sm z-50">
      <div className="flex gap-3 items-center ">
        <Logo />
        <Navigation />
      </div>
      <div className="flex gap-3">
        <SearchInput page={"shop"} />
        <div className="flex gap-2">
          <div className="bg-[#493f22] cursor-pointer flex items-center justify-center p-2 rounded-[8px] ">
            <User fill="white" />
          </div>
          <div className="bg-[#493f22] cursor-pointer flex items-center justify-center p-2 rounded-[8px] ">
            <ShoppingBag />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShopNavbar;
