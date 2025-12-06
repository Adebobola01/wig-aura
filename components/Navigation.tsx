"use client";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center gap-5">
      {navItems.map((item, idx) => (
        <a
          className={`text-sm font-medium ${
            item.link === pathname ? "text-(--primary)" : ""
          } leading-normal hover:text-(--primary) transition-colors`}
          href={item.link}
          key={`${item.name} ${idx}`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
