import Link from "next/link";
import Image from "next/image";

import navData from "../../../public/data/edv/navLinks.json";

const Sidebar = () => {
  return (
    <nav className="h-full w-full flex items-center justify-start flex-col p-6 bg-blueExtraLight">
      <Link href="https://www.google.com/">
        <Image
          src={"/images/logo.png"}
          alt="edv primary logo"
          width={50}
          height={50}
        />
      </Link>
      <ul className="mt-6 grid gri grid-cols-1 items-center text-center gap-y-8">
        {navData.navLinks.map((link) => (
          <li key={link.id} className="font-semibold text-lg">
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
