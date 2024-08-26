import Link from "next/link";
import Image from "next/image";

import { useSidebarStore } from "@/hooks/use-mobile-sidebar";
import navData from "../../../public/data/edv/navLinks.json";

const Sidebar = () => {
  const { toggle } = useSidebarStore();

  const handleClick = () => {
    toggle();
  };

  return (
    <nav className="h-3/4 w-full flex items-center justify-start flex-col p-6 ">
      <Link href="https://www.google.com/">
        <Image
          src={"/images/logo.png"}
          alt="edv primary logo"
          width={50}
          height={50}
        />
      </Link>
      <ul className="mt-6 grid gri grid-cols-1 items-center text-center gap-y-8 ">
        {navData.navLinks.map((link) => (
          <li
            key={link.id}
            className="text-xl text-darkBlue"
            onClick={handleClick}
          >
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center mt-10 gap-5">
        <div className="w-10 h-10 rounded-full bg-blue-200"></div>
        <div className="w-10 h-10 rounded-full bg-blue-200"></div>
        <div className="w-10 h-10 rounded-full bg-blue-200"></div>
      </div>
    </nav>
  );
};

export default Sidebar;
